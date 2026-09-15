// ============================================================
// PyLearn Pro — Service Worker v3 (PWABuilder-compatible)
// ============================================================

const CACHE_VERSION = 'pylearn-pro-v3';
const STATIC_CACHE  = `${CACHE_VERSION}-static`;

const CACHE_URLS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/learn.html',
  '/test.html',
  '/editor.html',
  '/offline.html',
  '/config.js',
  '/manifest.json',
  '/icon-512.png',
  '/icon-512.jpg',
  '/styles/main.css',
  '/js/app.js',
  '/js/auth.js',
  '/js/supabase.js',
  '/js/curriculum.js',
  '/js/questions.js',
];

// ── Install: pre-cache all core files ──────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(CACHE_URLS).catch((err) => {
        console.warn('[SW] Some files failed to cache:', err);
      });
    })
  );
  // Take over immediately — don't wait for old SW to die
  self.skipWaiting();
});

// ── Activate: delete stale caches ──────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE)
          .map((key) => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      // Notify all open tabs that a new version is active
      self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) =>
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION })
        );
      });
    })
  );
  self.clients.claim();
});

// ── Fetch: smart caching strategy ──────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Supabase API calls — always live
  if (url.hostname.includes('supabase.co')) return;

  // Skip CDN resources (Monaco, Skulpt, Prism, etc.)
  if (
    url.hostname.includes('cdn.') ||
    url.hostname.includes('jsdelivr') ||
    url.hostname.includes('cloudflare') ||
    url.hostname.includes('cdnjs') ||
    url.hostname.includes('fonts.googleapis') ||
    url.hostname.includes('fonts.gstatic')
  ) return;

  // HTML navigation: network-first, fall back to cache, then offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache a fresh copy
          const clone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() =>
          caches.match(request)
            .then((cached) => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // Static assets: cache-first, then network, then offline fallback
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Offline fallback
          if (request.destination === 'image') return caches.match('/icon-512.png');
          if (request.destination === 'document') return caches.match('/offline.html');
        });
    })
  );
});

// ── Message: skip waiting on demand ────────────────────────
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
