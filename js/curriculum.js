// ============================================================
// PyLearn Pro — Full Curriculum Data
// Python + DSA + Backend Syllabus with Content & Notes
// ============================================================

// ============================================================
// PYTHON TOPICS — 20 Topics
// ============================================================
window.PYTHON_TOPICS = [
  {
    id: 'py_basics', order: 1, type: 'python',
    icon: '🐍', title: 'Python Basics',
    desc: 'Variables, data types, input/output, type conversion, and Python fundamentals',
    subtopics: ['Variables', 'Data Types', 'Type Conversion', 'input() & print()', 'Comments'],
    content: `
      <h2>🐍 Introduction to Python</h2>
      <p>Python is a high-level, interpreted, dynamically-typed programming language created by Guido van Rossum in 1991. It is one of the most popular programming languages in the world due to its simplicity, readability, and versatility.</p>
      <div class="highlight">💡 Python is used in Web Development, Data Science, AI/ML, Automation, Game Development, and much more!</div>

      <h2>📦 Variables</h2>
      <p>A variable is a container for storing data values. In Python, you don't need to declare the type explicitly — Python figures it out automatically.</p>
      <h3>Rules for Variable Names:</h3>
      <ul>
        <li>Must start with a letter (a-z, A-Z) or underscore (_)</li>
        <li>Cannot start with a digit</li>
        <li>Can only contain letters, digits, and underscores</li>
        <li>Case-sensitive: <code>name</code> and <code>Name</code> are different variables</li>
        <li>Cannot be a Python keyword (like <code>if</code>, <code>for</code>, <code>while</code>, etc.)</li>
      </ul>
      <pre>
# Valid variable names
name = "Alice"
age = 25
_private = 42
myVar2 = 3.14
IS_CONSTANT = True

# Invalid — would cause SyntaxError
# 2name = "Bob"      # starts with digit
# my-var = 5         # hyphen not allowed
# for = 10           # 'for' is a keyword
      </pre>

      <h2>🔢 Data Types</h2>
      <p>Python has several built-in data types:</p>
      <table>
        <tr><th>Type</th><th>Example</th><th>Description</th></tr>
        <tr><td><code>int</code></td><td><code>42</code>, <code>-7</code></td><td>Whole numbers</td></tr>
        <tr><td><code>float</code></td><td><code>3.14</code>, <code>-0.5</code></td><td>Decimal numbers</td></tr>
        <tr><td><code>str</code></td><td><code>"Hello"</code>, <code>'World'</code></td><td>Text (strings)</td></tr>
        <tr><td><code>bool</code></td><td><code>True</code>, <code>False</code></td><td>Boolean values</td></tr>
        <tr><td><code>None</code></td><td><code>None</code></td><td>Absence of value</td></tr>
        <tr><td><code>list</code></td><td><code>[1, 2, 3]</code></td><td>Ordered, mutable collection</td></tr>
        <tr><td><code>tuple</code></td><td><code>(1, 2, 3)</code></td><td>Ordered, immutable collection</td></tr>
        <tr><td><code>dict</code></td><td><code>{"a": 1}</code></td><td>Key-value pairs</td></tr>
        <tr><td><code>set</code></td><td><code>{1, 2, 3}</code></td><td>Unordered unique collection</td></tr>
      </table>
      <pre>
x = 42           # int
pi = 3.14159     # float
name = "Python"  # str
flag = True      # bool
nothing = None   # NoneType

print(type(x))      # &lt;class 'int'&gt;
print(type(pi))     # &lt;class 'float'&gt;
print(type(name))   # &lt;class 'str'&gt;
print(type(flag))   # &lt;class 'bool'&gt;
print(type(nothing)) # &lt;class 'NoneType'&gt;
      </pre>

      <h2>🔄 Type Conversion (Casting)</h2>
      <p>Converting one data type to another is called type conversion or casting.</p>
      <pre>
# Implicit conversion (Python does it automatically)
x = 10    # int
y = 3.14  # float
z = x + y # Python converts x to float → 13.14

# Explicit conversion (you do it manually)
a = int(3.99)    # → 3 (truncates, doesn't round)
b = float(5)     # → 5.0
c = str(42)      # → "42"
d = bool(0)      # → False
e = bool("Hi")   # → True (non-empty string)
f = int("123")   # → 123
g = list("abc")  # → ['a', 'b', 'c']
      </pre>
      <div class="warning">⚠️ <strong>Gotcha:</strong> <code>int("3.14")</code> will raise a <code>ValueError</code>! First convert to float: <code>int(float("3.14"))</code></div>

      <h2>💬 print() and input()</h2>
      <pre>
# print() — output to console
print("Hello, World!")
print("Name:", "Alice", "Age:", 25)  # Multiple args
print("Line1\\nLine2")               # Newline
print("A", "B", "C", sep="-")       # Output: A-B-C
print("Hello", end=" ")              # No newline at end
print("World")                       # Output: Hello World

# input() — take user input (always returns str)
name = input("Enter your name: ")
age  = int(input("Enter your age: "))  # Convert to int
      </pre>

      <h2>📝 Comments</h2>
      <pre>
# Single-line comment

"""
Multi-line
comment (actually a docstring)
"""

# Best practice: comments explain WHY, not WHAT
x = x + 1  # increment counter (bad — obvious)
x = x + 1  # retry count: allow one extra attempt (good)
      </pre>

      <h2>🎯 f-Strings (Formatted String Literals)</h2>
      <pre>
name = "Alice"
age = 25
score = 98.567

# f-string (Python 3.6+)
print(f"Name: {name}, Age: {age}")     # Name: Alice, Age: 25
print(f"Score: {score:.2f}")            # Score: 98.57
print(f"2 + 2 = {2 + 2}")              # 2 + 2 = 4
print(f"{name.upper()} is {age} years old")  # ALICE is 25 years old
      </pre>

      <h2>🔑 Python Keywords</h2>
      <p>Keywords are reserved words that cannot be used as variable names:</p>
      <div class="info">
        <code>False, None, True, and, as, assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield</code>
      </div>
    `,
    notes: [
      { title: 'Variable Rule', code: 'name = value  # no type needed' },
      { title: 'type() function', code: 'type(42) → <class "int">' },
      { title: 'int()', code: 'int("42") → 42\nint(3.9) → 3' },
      { title: 'float()', code: 'float("3.14") → 3.14\nfloat(5) → 5.0' },
      { title: 'str()', code: 'str(42) → "42"' },
      { title: 'bool()', code: 'bool(0) → False\nbool("") → False\nbool(1) → True' },
      { title: 'input()', code: 'name = input("Prompt: ")  # always str' },
      { title: 'print() sep/end', code: 'print("A","B",sep=",")\nprint("Hi",end="")' },
      { title: 'f-string', code: 'f"Hello {name}!"' },
      { title: 'None type', code: 'x = None\ntype(x) → NoneType' },
    ]
  },

  {
    id: 'py_operators', order: 2, type: 'python',
    icon: '⚙️', title: 'Operators',
    desc: 'Arithmetic, comparison, logical, bitwise, assignment, membership, and identity operators',
    subtopics: ['Arithmetic', 'Comparison', 'Logical', 'Bitwise', 'Assignment', 'Membership', 'Identity'],
    content: `
      <h2>⚙️ Python Operators</h2>
      <p>Operators are symbols that perform operations on values (operands).</p>

      <h2>➕ Arithmetic Operators</h2>
      <pre>
a, b = 17, 5
print(a + b)   # 22  → Addition
print(a - b)   # 12  → Subtraction
print(a * b)   # 85  → Multiplication
print(a / b)   # 3.4 → Division (always float)
print(a // b)  # 3   → Floor Division (integer result)
print(a % b)   # 2   → Modulus (remainder)
print(a ** b)  # 1419857 → Exponentiation (17^5)
      </pre>
      <div class="highlight">💡 <strong>Floor Division</strong>: 17 // 5 = 3 (not 3.4). It rounds DOWN to nearest integer. -17 // 5 = -4 (not -3)!</div>

      <h2>🔍 Comparison Operators</h2>
      <pre>
x, y = 10, 20
print(x == y)  # False → Equal to
print(x != y)  # True  → Not equal to
print(x < y)   # True  → Less than
print(x > y)   # False → Greater than
print(x <= y)  # True  → Less than or equal
print(x >= y)  # False → Greater than or equal
      </pre>

      <h2>🔗 Logical Operators</h2>
      <pre>
a, b = True, False
print(a and b)  # False → Both must be True
print(a or b)   # True  → At least one True
print(not a)    # False → Inverts the value

# Short-circuit evaluation
x = 0
y = x and (10/x)  # x is falsy, so (10/x) never executes!
# No ZeroDivisionError!
      </pre>

      <h2>⚡ Bitwise Operators</h2>
      <pre>
a, b = 12, 10   # 12 = 1100, 10 = 1010 in binary
print(a & b)    # 8  → AND:  1100 & 1010 = 1000
print(a | b)    # 14 → OR:   1100 | 1010 = 1110
print(a ^ b)    # 6  → XOR:  1100 ^ 1010 = 0110
print(~a)       # -13 → NOT: flips all bits
print(a << 2)   # 48 → Left shift by 2 (multiply by 4)
print(a >> 1)   # 6  → Right shift by 1 (divide by 2)
      </pre>

      <h2>📝 Assignment Operators</h2>
      <pre>
x = 10
x += 5   # x = x + 5  → 15
x -= 3   # x = x - 3  → 12
x *= 2   # x = x * 2  → 24
x /= 4   # x = x / 4  → 6.0
x //= 2  # x = x // 2 → 3.0
x **= 3  # x = x ** 3 → 27.0
x %= 5   # x = x % 5  → 2.0

# Walrus operator (Python 3.8+)
n = 10
if (m := n * 2) > 15:
    print(f"m={m} is big")  # m=20 is big
      </pre>

      <h2>🔎 Membership Operators</h2>
      <pre>
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)     # True
print("mango" not in fruits) # True
print("a" in "banana")       # True (works on strings too)

d = {"name": "Alice", "age": 25}
print("name" in d)   # True (checks keys, not values)
      </pre>

      <h2>🆔 Identity Operators</h2>
      <pre>
a = [1, 2, 3]
b = a        # b points to same object
c = [1, 2, 3]  # c is a NEW object

print(a is b)   # True  → same object in memory
print(a is c)   # False → different objects
print(a is not c)  # True

# For small ints and strings, Python caches them:
x = 256
y = 256
print(x is y)  # True  (cached)
x = 257
y = 257
print(x is y)  # May be False (not cached)
      </pre>
      <div class="warning">⚠️ Use <code>==</code> to compare VALUES. Use <code>is</code> only to check if two variables point to the SAME object. Never use <code>is</code> for string/int comparison!</div>

      <h2>📊 Operator Precedence (High to Low)</h2>
      <table>
        <tr><th>Precedence</th><th>Operator</th><th>Description</th></tr>
        <tr><td>1 (highest)</td><td><code>()</code></td><td>Parentheses</td></tr>
        <tr><td>2</td><td><code>**</code></td><td>Exponentiation</td></tr>
        <tr><td>3</td><td><code>+x, -x, ~x</code></td><td>Unary</td></tr>
        <tr><td>4</td><td><code>*, /, //, %</code></td><td>Multiplication/Division</td></tr>
        <tr><td>5</td><td><code>+, -</code></td><td>Addition/Subtraction</td></tr>
        <tr><td>6</td><td><code><<, >></code></td><td>Bitwise Shift</td></tr>
        <tr><td>7</td><td><code>&</code></td><td>Bitwise AND</td></tr>
        <tr><td>8</td><td><code>^</code></td><td>Bitwise XOR</td></tr>
        <tr><td>9</td><td><code>|</code></td><td>Bitwise OR</td></tr>
        <tr><td>10</td><td><code>==,!=,<,>,<=,>=,is,in</code></td><td>Comparison</td></tr>
        <tr><td>11</td><td><code>not</code></td><td>Logical NOT</td></tr>
        <tr><td>12</td><td><code>and</code></td><td>Logical AND</td></tr>
        <tr><td>13 (lowest)</td><td><code>or</code></td><td>Logical OR</td></tr>
      </table>
    `,
    notes: [
      { title: '// Floor Div', code: '17 // 5 → 3\n-17 // 5 → -4' },
      { title: '% Modulus', code: '17 % 5 → 2\n-17 % 5 → 3' },
      { title: '** Power', code: '2 ** 10 → 1024' },
      { title: 'and short-circuit', code: 'False and expr → False (expr skipped)' },
      { title: 'or short-circuit', code: 'True or expr → True (expr skipped)' },
      { title: 'Walrus :=', code: 'if (n := len(a)) > 5: print(n)' },
      { title: 'is vs ==', code: 'a == b  # same value\na is b  # same object' },
      { title: 'in operator', code: '"x" in "python" → False\n"y" in "python" → True' },
      { title: 'Bitwise AND &', code: '5 & 3 → 1  (101 & 011 = 001)' },
      { title: 'Bit shift', code: '1 << 3 → 8\n8 >> 2 → 2' },
    ]
  },

  {
    id: 'py_control', order: 3, type: 'python',
    icon: '🔀', title: 'Control Flow',
    desc: 'if, elif, else statements, nested conditions, ternary expressions, and match-case',
    subtopics: ['if/elif/else', 'Nested Conditions', 'Ternary', 'match-case'],
    content: `
      <h2>🔀 Control Flow — if / elif / else</h2>
      <p>Control flow lets your program make decisions based on conditions.</p>
      <pre>
# Basic if-else
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")

# if-elif-else chain
marks = 75
if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 60:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")   # Grade: B
      </pre>

      <h2>🏗️ Nested if Statements</h2>
      <pre>
x = 15
if x > 0:
    print("Positive")
    if x % 2 == 0:
        print("and Even")
    else:
        print("and Odd")
elif x < 0:
    print("Negative")
else:
    print("Zero")
# Output: Positive\nand Odd
      </pre>

      <h2>⚡ Ternary Expression (One-liner if-else)</h2>
      <pre>
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult

# Nested ternary (avoid for readability)
x = 5
result = "pos" if x > 0 else ("zero" if x == 0 else "neg")

# Good use case
max_val = a if a > b else b
abs_val = x if x >= 0 else -x
      </pre>

      <h2>🎯 Truthy & Falsy Values</h2>
      <p>In Python, the following evaluate to <code>False</code>:</p>
      <div class="warning">
        <code>False, None, 0, 0.0, 0j, "", [], (), {}, set()</code><br/>
        Everything else is <strong>Truthy</strong>!
      </div>
      <pre>
if []:    print("yes")  # Not printed — empty list is falsy
if [0]:   print("yes")  # PRINTED — [0] is non-empty!
if "":    print("yes")  # Not printed
if " ":   print("yes")  # PRINTED — space is non-empty!
if 0.0:   print("yes")  # Not printed
if 0.001: print("yes")  # PRINTED
      </pre>

      <h2>🔄 match-case (Python 3.10+)</h2>
      <pre>
command = "quit"
match command:
    case "quit":
        print("Quitting...")
    case "help":
        print("Available commands: quit, help, start")
    case "start":
        print("Starting...")
    case _:        # default (like else)
        print(f"Unknown command: {command}")

# Pattern matching with conditions (guards)
point = (0, 5)
match point:
    case (0, 0):  print("Origin")
    case (x, 0):  print(f"On X-axis at {x}")
    case (0, y):  print(f"On Y-axis at {y}")    # → On Y-axis at 5
    case (x, y):  print(f"Point at ({x},{y})")
      </pre>

      <h2>💡 Practical Examples</h2>
      <pre>
# FizzBuzz — classic interview question
for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

# Check leap year
year = 2024
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
print(f"{year} is {'a leap' if is_leap else 'not a leap'} year")
      </pre>
    `,
    notes: [
      { title: 'if-elif-else', code: 'if cond1:\n    ...\nelif cond2:\n    ...\nelse:\n    ...' },
      { title: 'Ternary', code: 'x = a if cond else b' },
      { title: 'Falsy values', code: '0, "", [], {}, None, False' },
      { title: 'FizzBuzz', code: 'if n%15==0: "FizzBuzz"\nelif n%3==0: "Fizz"\nelif n%5==0: "Buzz"' },
      { title: 'Chained compare', code: '1 < x < 10  # valid in Python!' },
      { title: 'match-case', code: 'match val:\n  case 1: ...\n  case _: ...' },
    ]
  },

  {
    id: 'py_loops', order: 4, type: 'python',
    icon: '🔁', title: 'Loops',
    desc: 'for loops, while loops, break, continue, pass, range(), enumerate(), and nested loops',
    subtopics: ['for loop', 'while loop', 'break/continue/pass', 'range()', 'enumerate()', 'zip()'],
    content: `
      <h2>🔁 for Loop</h2>
      <p>Used to iterate over a sequence (list, tuple, string, range, dict, etc.)</p>
      <pre>
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Iterating over a string
for ch in "Python":
    print(ch, end=" ")  # P y t h o n

# Iterating over a dict
student = {"name": "Alice", "age": 20, "grade": "A"}
for key, val in student.items():
    print(f"{key}: {val}")
      </pre>

      <h2>📏 range() function</h2>
      <pre>
range(stop)              # 0, 1, ..., stop-1
range(start, stop)       # start, ..., stop-1
range(start, stop, step) # with step

for i in range(5):        print(i)        # 0 1 2 3 4
for i in range(2, 8):     print(i)        # 2 3 4 5 6 7
for i in range(0, 10, 2): print(i)        # 0 2 4 6 8
for i in range(10, 0, -1): print(i)       # 10 9 8 ... 1

# Sum of 1 to 100
total = sum(range(1, 101))  # 5050
      </pre>

      <h2>🔢 enumerate()</h2>
      <pre>
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple
# 1: banana
# 2: cherry

# Start from 1
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
      </pre>

      <h2>🤝 zip()</h2>
      <pre>
names  = ["Alice", "Bob",   "Charlie"]
scores = [95,      87,      92      ]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
# Stops at shortest sequence

# Unzip
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
nums, chars = zip(*pairs)
print(nums)   # (1, 2, 3)
print(chars)  # ('a', 'b', 'c')
      </pre>

      <h2>🔄 while Loop</h2>
      <pre>
n = 1
while n <= 5:
    print(n)
    n += 1

# Input validation with while
while True:
    age = int(input("Enter age (1-120): "))
    if 1 <= age <= 120:
        break
    print("Invalid age! Try again.")

# while-else
n = 10
while n > 0:
    n -= 1
else:
    print("Loop finished normally")  # runs if no break
      </pre>

      <h2>⛔ break, continue, pass</h2>
      <pre>
# break — exit loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)  # prints 0,1,2,3,4

# continue — skip current iteration
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # prints 1,3,5,7,9

# pass — do nothing (placeholder)
for i in range(5):
    if i == 3:
        pass   # do nothing for now
    print(i)   # prints all: 0,1,2,3,4
      </pre>

      <h2>🏗️ Nested Loops</h2>
      <pre>
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="  ")
    print()

# Pattern printing
for i in range(1, 6):
    print("*" * i)

# Find pairs that sum to target (O(n²))
nums = [1, 3, 5, 7, 9]
target = 10
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i] + nums[j] == target:
            print(f"({nums[i]}, {nums[j]})")
      </pre>

      <h2>🎯 Loop-else</h2>
      <pre>
# else block runs when loop completes WITHOUT break
for i in range(2, n):
    if n % i == 0:
        print(f"{n} is not prime")
        break
else:
    print(f"{n} is prime")
      </pre>
    `,
    notes: [
      { title: 'for loop', code: 'for item in iterable:\n    ...' },
      { title: 'range()', code: 'range(5) → 0,1,2,3,4\nrange(2,8) → 2..7\nrange(0,10,2) → 0,2,4...' },
      { title: 'enumerate()', code: 'for i, val in enumerate(lst, 1):' },
      { title: 'zip()', code: 'for a, b in zip(list1, list2):' },
      { title: 'while True + break', code: 'while True:\n    if cond: break' },
      { title: 'break vs continue', code: 'break → exit loop\ncontinue → skip iteration' },
      { title: 'Loop else', code: 'for/while ...\nelse: runs if no break' },
      { title: 'pass', code: 'pass  # placeholder, no-op' },
    ]
  },

  {
    id: 'py_functions', order: 5, type: 'python',
    icon: '🔧', title: 'Functions',
    desc: 'def, return, args, kwargs, *args, **kwargs, lambda, recursion, and scope',
    subtopics: ['def/return', '*args/**kwargs', 'Default args', 'Lambda', 'Recursion', 'Scope (LEGB)'],
    content: `
      <h2>🔧 Defining Functions</h2>
      <pre>
def greet(name):
    """Returns a greeting string."""
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!

# Multiple return values (returns a tuple)
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 7, 2, 9])
print(lo, hi)  # 1 9
      </pre>

      <h2>📋 Default Parameters</h2>
      <pre>
def power(base, exp=2):    # exp defaults to 2
    return base ** exp

print(power(3))     # 9  (3^2)
print(power(2, 10)) # 1024
      </pre>
      <div class="warning">⚠️ <strong>Mutable Default Args Bug:</strong> Never use mutable objects (lists, dicts) as defaults!<br/>
      <code>def add(item, lst=[]):</code> — this <code>lst</code> is shared across ALL calls!</div>

      <h2>🔣 *args and **kwargs</h2>
      <pre>
# *args — variable positional arguments (tuple)
def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))   # 10
print(total(10, 20))        # 30

# **kwargs — variable keyword arguments (dict)
def describe(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")

describe(name="Alice", age=25, city="Mumbai")

# Both together
def func(a, b, *args, **kwargs):
    print(a, b, args, kwargs)

func(1, 2, 3, 4, x=5, y=6)  # 1 2 (3,4) {'x':5,'y':6}
      </pre>

      <h2>⚡ Lambda Functions</h2>
      <pre>
# Anonymous one-liner function
square  = lambda x: x ** 2
add     = lambda a, b: a + b
is_even = lambda n: n % 2 == 0

print(square(5))      # 25
print(add(3, 4))      # 7
print(is_even(6))     # True

# Used with sorted(), map(), filter()
nums = [5, 2, 8, 1, 9, 3]
nums.sort(key=lambda x: x)           # sort ascending
words = ["banana", "apple", "cherry"]
words.sort(key=lambda w: len(w))     # sort by length

evens   = list(filter(lambda x: x%2==0, range(10)))
squared = list(map(lambda x: x**2,   range(5)))
      </pre>

      <h2>🌀 Recursion</h2>
      <pre>
# Factorial
def factorial(n):
    if n == 0 or n == 1:  # base case
        return 1
    return n * factorial(n - 1)  # recursive case

print(factorial(5))  # 120

# Fibonacci
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Binary search (recursive)
def binary_search(arr, target, lo, hi):
    if lo > hi: return -1
    mid = (lo + hi) // 2
    if arr[mid] == target: return mid
    elif arr[mid] < target: return binary_search(arr, target, mid+1, hi)
    else: return binary_search(arr, target, lo, mid-1)
      </pre>

      <h2>🎯 LEGB Scope Rule</h2>
      <pre>
x = "global"       # Global scope

def outer():
    x = "enclosing"  # Enclosing scope

    def inner():
        x = "local"    # Local scope
        print(x)       # local (L)

    inner()
    print(x)           # enclosing (E)

outer()
print(x)               # global (G)

# global keyword
counter = 0
def increment():
    global counter
    counter += 1

# nonlocal keyword
def outer2():
    n = 0
    def inner2():
        nonlocal n
        n += 1
    inner2()
    print(n)  # 1
      </pre>
    `,
    notes: [
      { title: 'Function def', code: 'def name(params):\n    return value' },
      { title: '*args', code: 'def f(*args): → tuple' },
      { title: '**kwargs', code: 'def f(**kwargs): → dict' },
      { title: 'Lambda', code: 'f = lambda x: x**2' },
      { title: 'Recursion base', code: 'Always have a base case!' },
      { title: 'LEGB', code: 'Local→Enclosing→Global→Built-in' },
      { title: 'global keyword', code: 'global x  # modify global var' },
      { title: 'Default args', code: 'def f(x, n=2): ...' },
      { title: 'Docstring', code: '"""Function description."""' },
    ]
  },

  {
    id: 'py_strings', order: 6, type: 'python',
    icon: '📝', title: 'Strings',
    desc: 'String methods, slicing, formatting, immutability, and string operations',
    subtopics: ['Slicing', 'Methods', 'Formatting', 'String Operations'],
    content: `
      <h2>📝 String Basics</h2>
      <p>Strings are <strong>immutable</strong> sequences of characters in Python.</p>
      <pre>
s = "Hello, World!"
print(len(s))     # 13
print(s[0])       # H
print(s[-1])      # !
print(s[7:12])    # World
print(s[:5])      # Hello
print(s[::-1])    # !dlroW ,olleH (reversed)

# String operations
a = "Hello"
b = "World"
print(a + " " + b)  # Hello World (concatenation)
print(a * 3)         # HelloHelloHello
print("lo" in a)     # True
      </pre>

      <h2>✂️ String Slicing</h2>
      <pre>
s = "Python Programming"
#    0123456789...
s[0:6]    # "Python"
s[7:]     # "Programming"
s[-11:]   # "Programming"
s[::2]    # "Pto rgamn" (every 2nd char)
s[::-1]   # reversed string
      </pre>

      <h2>🔧 Important String Methods</h2>
      <pre>
s = "  Hello, World!  "

# Case
s.upper()     # "  HELLO, WORLD!  "
s.lower()     # "  hello, world!  "
s.title()     # "  Hello, World!  "
s.capitalize()# "  hello, world!  " (only 1st char)
s.swapcase()  # swaps upper↔lower

# Strip
s.strip()     # "Hello, World!" (removes both)
s.lstrip()    # "Hello, World!  "
s.rstrip()    # "  Hello, World!"

# Search
s.find("World")     # 9 (or -1 if not found)
s.index("World")    # 9 (raises ValueError if not found)
s.count("l")        # 3
s.startswith("  H") # True
s.endswith("  ")    # True
"abc".replace("b", "X")  # "aXc"

# Split & Join
"a,b,c".split(",")        # ['a','b','c']
" ".join(["Hello","World"]) # "Hello World"
"abc".split()             # ['abc'] (no arg = any whitespace)

# Check content
"123".isdigit()   # True
"abc".isalpha()   # True
"abc123".isalnum()# True
"   ".isspace()   # True

# Format
"Price: {:.2f}".format(3.14159)  # "Price: 3.14"
f"{42:05d}"   # "00042" (zero-padded)
f"{3.14:.2f}" # "3.14"
      </pre>
    `,
    notes: [
      { title: 'Immutable', code: 's[0] = "X"  # TypeError!' },
      { title: 'Slicing', code: 's[start:stop:step]' },
      { title: 'Reverse', code: 's[::-1]' },
      { title: 'split/join', code: '"a,b".split(",") → []\n",".join(lst)' },
      { title: 'strip/find/replace', code: 's.strip() s.find("x") s.replace("a","b")' },
    ]
  },

  {
    id: 'py_lists', order: 7, type: 'python',
    icon: '📋', title: 'Lists',
    desc: 'List creation, CRUD operations, methods, list comprehensions, and sorting',
    subtopics: ['Creation', 'Methods', 'Slicing', 'List Comprehension', 'Sorting'],
    content: `
      <h2>📋 Lists</h2>
      <p>Lists are <strong>ordered, mutable</strong> sequences that can hold items of any type.</p>
      <pre>
# Creation
lst = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]
nested = [[1,2], [3,4], [5,6]]
empty = []

# Access
lst[0]    # 1
lst[-1]   # 5
lst[1:4]  # [2,3,4]

# Modify
lst[0] = 10        # [10, 2, 3, 4, 5]
lst.append(6)      # [10, 2, 3, 4, 5, 6]
lst.insert(1, 99)  # insert at index 1
lst.extend([7,8])  # add multiple items
lst.remove(99)     # remove first occurrence of 99
popped = lst.pop() # removes & returns last item
popped = lst.pop(2)# removes & returns item at index 2
del lst[0]         # delete by index
lst.clear()        # empty the list

# Info
len(lst)        # length
lst.count(3)    # count occurrences
lst.index(3)    # first index of 3

# Sort
lst.sort()            # in-place ascending
lst.sort(reverse=True) # descending
lst.sort(key=lambda x: x%3)  # custom key
sorted(lst)    # returns NEW sorted list

lst.reverse()  # reverse in-place
      </pre>

      <h2>🎯 List Comprehension</h2>
      <pre>
# [expression for item in iterable if condition]
squares    = [x**2 for x in range(10)]
evens      = [x for x in range(20) if x%2==0]
flat       = [x for row in [[1,2],[3,4]] for x in row]
words      = [w.upper() for w in ["hello","world"]]

# Nested comprehension
matrix = [[i*j for j in range(1,4)] for i in range(1,4)]
# [[1,2,3],[2,4,6],[3,6,9]]
      </pre>
    `,
    notes: [
      { title: 'append vs extend', code: 'append(x) → adds x as item\nextend([a,b]) → adds multiple' },
      { title: 'pop vs remove', code: 'pop(i) → removes by index\nremove(x) → removes by value' },
      { title: 'List comp', code: '[x**2 for x in range(10) if x%2==0]' },
      { title: 'Copy', code: 'b = a[:]  or  b = a.copy()' },
      { title: 'in operator', code: '3 in [1,2,3] → True' },
    ]
  },

  {
    id: 'py_tuples', order: 8, type: 'python',
    icon: '📦', title: 'Tuples',
    desc: 'Tuple creation, immutability, packing/unpacking, and when to use tuples vs lists',
    subtopics: ['Creation', 'Immutability', 'Packing/Unpacking', 'Named Tuples'],
    content: `
      <h2>📦 Tuples</h2>
      <p>Tuples are <strong>ordered, immutable</strong> sequences. Once created, they cannot be modified.</p>
      <pre>
t = (1, 2, 3)
single = (42,)    # Single element tuple — comma required!
empty = ()
t2 = 1, 2, 3      # Parentheses optional for creation

# Access (same as list)
t[0]    # 1
t[-1]   # 3
t[1:]   # (2, 3)

# t[0] = 99  # TypeError: 'tuple' object does not support item assignment

# Unpacking
a, b, c = (10, 20, 30)
first, *rest = (1, 2, 3, 4, 5)  # first=1, rest=[2,3,4,5]
*init, last  = (1, 2, 3, 4, 5)  # init=[1,2,3,4], last=5

# Swap without temp variable
x, y = 5, 10
x, y = y, x  # x=10, y=5

# Tuple methods
t = (1, 2, 3, 2, 2)
t.count(2)   # 3
t.index(3)   # 2

# Tuple as dict key (hashable, unlike list)
d = {(0,0): "origin", (1,0): "x-axis"}
      </pre>
    `,
    notes: [
      { title: 'Immutable', code: 'Cannot modify after creation' },
      { title: 'Single item', code: '(42,)  ← comma required!' },
      { title: 'Unpacking', code: 'a, b, c = (1, 2, 3)' },
      { title: 'Star unpack', code: 'first, *rest = (1,2,3,4)' },
      { title: 'Swap', code: 'x, y = y, x' },
    ]
  },

  {
    id: 'py_dicts', order: 9, type: 'python',
    icon: '🗂️', title: 'Dictionaries',
    desc: 'Dict creation, CRUD, methods, dict comprehensions, and advanced patterns',
    subtopics: ['Creation', 'CRUD', 'Methods', 'Dict Comprehension'],
    content: `
      <h2>🗂️ Dictionaries</h2>
      <p>Dicts are <strong>ordered</strong> (Python 3.7+), <strong>mutable</strong> key-value stores. Keys must be hashable (immutable).</p>
      <pre>
d = {"name": "Alice", "age": 25, "city": "Mumbai"}
empty = {}
d2 = dict(name="Bob", age=30)

# Access
d["name"]       # "Alice"
d.get("salary", 0)  # 0 (default if key missing)
d.get("age")    # 25

# Modify
d["age"] = 26            # update existing
d["country"] = "India"   # add new key
del d["city"]            # delete key
popped = d.pop("age")    # remove & return value
d.update({"x": 1, "y": 2})  # merge/update

# Iteration
for key in d:              print(key)
for key, val in d.items(): print(key, val)
for val in d.values():     print(val)

# Check key
"name" in d   # True

# Dict comprehension
squares = {x: x**2 for x in range(6)}
# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}

filtered = {k: v for k, v in d.items() if isinstance(v, str)}
inverted = {v: k for k, v in d.items()}  # swap keys and values

# Useful methods
d.keys()     # dict_keys(['name','country','x','y'])
d.values()   # dict_values([...])
d.items()    # dict_items([('name','Alice'),...])
d.setdefault("score", 100)  # sets only if key doesn't exist
      </pre>
    `,
    notes: [
      { title: 'Access', code: 'd[key]  or  d.get(key, default)' },
      { title: 'Add/Update', code: 'd[key] = value' },
      { title: 'Delete', code: 'del d[key]  or  d.pop(key)' },
      { title: 'Loop', code: 'for k, v in d.items():' },
      { title: 'Dict comp', code: '{k: v for k, v in items if cond}' },
      { title: 'setdefault', code: 'd.setdefault(key, default_val)' },
    ]
  },

  {
    id: 'py_sets', order: 10, type: 'python',
    icon: '🔵', title: 'Sets',
    desc: 'Set operations, methods, frozenset, and when to use sets',
    subtopics: ['Creation', 'Operations', 'Methods', 'frozenset'],
    content: `
      <h2>🔵 Sets</h2>
      <p>Sets are <strong>unordered, mutable</strong> collections of <strong>unique</strong> elements.</p>
      <pre>
s = {1, 2, 3, 4}
s2 = set([1, 2, 2, 3, 3])  # {1, 2, 3} — duplicates removed!
empty_set = set()   # NOT {} — that creates a dict!

# Add/Remove
s.add(5)
s.remove(3)     # KeyError if not present
s.discard(99)   # No error if not present
s.pop()         # removes random element

# Set Operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # {1,2,3,4,5,6}  Union
a & b   # {3, 4}          Intersection
a - b   # {1, 2}          Difference (in a but not b)
a ^ b   # {1,2,5,6}       Symmetric diff (not in both)

a.issubset(b)     # False
a.issuperset(b)   # False
a.isdisjoint({7}) # True (no common elements)

# frozenset — immutable set (can be dict key)
fs = frozenset([1, 2, 3])
      </pre>
    `,
    notes: [
      { title: 'No duplicates', code: 'set([1,1,2,2]) → {1,2}' },
      { title: 'Empty set', code: 'set()  ← NOT {}' },
      { title: 'Union |', code: 'a | b  or  a.union(b)' },
      { title: 'Intersection &', code: 'a & b  or  a.intersection(b)' },
      { title: 'Difference -', code: 'a - b  or  a.difference(b)' },
      { title: 'frozenset', code: 'frozenset([1,2,3]) → hashable set' },
    ]
  },

  {
    id: 'py_files', order: 11, type: 'python',
    icon: '📁', title: 'File Handling',
    desc: 'Read, write, append files; with statement; CSV and JSON handling',
    subtopics: ['open()', 'with statement', 'read/write/append', 'CSV', 'JSON'],
    content: `
      <h2>📁 File Handling</h2>
      <pre>
# Open modes
# 'r'  → read (default)
# 'w'  → write (creates or overwrites)
# 'a'  → append
# 'rb','wb' → binary modes
# 'r+' → read+write

# Best practice: use 'with' (auto-closes file)
with open("data.txt", "w") as f:
    f.write("Hello\\n")
    f.write("World\\n")
    f.writelines(["Line1\\n", "Line2\\n"])

with open("data.txt", "r") as f:
    content = f.read()        # entire file as string
    lines = f.readlines()     # list of lines
    line  = f.readline()      # one line at a time

# Iterate line by line (memory efficient)
with open("data.txt") as f:
    for line in f:
        print(line.strip())

# JSON handling
import json
data = {"name": "Alice", "scores": [95, 87, 92]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json") as f:
    loaded = json.load(f)

# String ↔ JSON
json_str = json.dumps(data)         # dict → JSON string
back = json.loads(json_str)         # JSON string → dict
      </pre>
    `,
    notes: [
      { title: 'with statement', code: 'with open(file, mode) as f:\n    ...' },
      { title: 'read modes', code: '"r","w","a","rb","wb","r+"' },
      { title: 'Read all', code: 'f.read() → string' },
      { title: 'Read lines', code: 'f.readlines() → list' },
      { title: 'JSON dump/load', code: 'json.dump(obj,f)\njson.load(f)' },
    ]
  },

  {
    id: 'py_exceptions', order: 12, type: 'python',
    icon: '⚠️', title: 'Exception Handling',
    desc: 'try/except/else/finally, raising exceptions, custom exceptions, and best practices',
    subtopics: ['try/except', 'else/finally', 'raise', 'Custom Exceptions'],
    content: `
      <h2>⚠️ Exception Handling</h2>
      <pre>
try:
    x = int(input("Enter number: "))
    result = 10 / x
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except (TypeError, OverflowError) as e:
    print(f"Error: {e}")
except Exception as e:       # catch all
    print(f"Unexpected: {e}")
else:
    print(f"Result: {result}")  # runs if no exception
finally:
    print("Always runs!")       # cleanup

# Raise exception
def check_age(age):
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    return age

# Custom exception
class InsufficientFundsError(Exception):
    def __init__(self, amount, balance):
        self.amount = amount
        self.balance = balance
        super().__init__(f"Need {amount}, have {balance}")

# Common exceptions
# ValueError, TypeError, KeyError, IndexError,
# AttributeError, ZeroDivisionError, FileNotFoundError,
# StopIteration, RecursionError, MemoryError
      </pre>
    `,
    notes: [
      { title: 'try-except', code: 'try:\n    risky()\nexcept SomeError as e:\n    handle(e)' },
      { title: 'finally', code: 'finally: → always runs (cleanup)' },
      { title: 'raise', code: 'raise ValueError("message")' },
      { title: 'Custom exception', code: 'class MyErr(Exception): pass' },
    ]
  },

  {
    id: 'py_oop', order: 13, type: 'python',
    icon: '🏛️', title: 'OOP — Classes & Objects',
    desc: 'Classes, objects, inheritance, polymorphism, encapsulation, dunder methods',
    subtopics: ['Class/Object', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Dunder methods'],
    content: `
      <h2>🏛️ Object-Oriented Programming</h2>
      <pre>
class Animal:
    species_count = 0  # class variable (shared)

    def __init__(self, name, sound):
        self.name  = name   # instance variable
        self.sound = sound
        Animal.species_count += 1

    def speak(self):
        return f"{self.name} says {self.sound}"

    def __str__(self):       # string representation
        return f"Animal({self.name})"

    def __repr__(self):      # developer representation
        return f"Animal(name={self.name!r})"

    def __len__(self):       # len(obj)
        return len(self.name)

    def __eq__(self, other): # obj1 == obj2
        return self.name == other.name

# Inheritance
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")
        self.breed = breed

    def speak(self):  # Polymorphism — override
        return f"{self.name} barks loudly!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

d = Dog("Rex", "Labrador")
print(d.speak())   # Rex barks loudly!
print(isinstance(d, Dog))    # True
print(isinstance(d, Animal)) # True (inheritance)

# Encapsulation
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private (name-mangled)

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, val):
        if val < 0: raise ValueError("Negative balance!")
        self.__balance = val
      </pre>
    `,
    notes: [
      { title: '__init__', code: 'def __init__(self, ...): → constructor' },
      { title: 'self', code: 'First param of every method = instance' },
      { title: 'Inheritance', code: 'class Dog(Animal): → inherits' },
      { title: 'super()', code: 'super().__init__(...) → parent constructor' },
      { title: 'Private attr', code: 'self.__attr → name-mangled to _Class__attr' },
      { title: '@property', code: '@property → getter\n@x.setter → setter' },
    ]
  },

  {
    id: 'py_modules', order: 14, type: 'python',
    icon: '📚', title: 'Modules & Packages',
    desc: 'import, from-import, __name__, pip, standard library overview',
    subtopics: ['import', 'Standard Library', 'pip', '__name__ == "__main__"'],
    content: `
      <h2>📚 Modules</h2>
      <pre>
import math
from math import sqrt, pi
from math import * # (avoid in production)
import numpy as np  # alias

print(math.sqrt(16))   # 4.0
print(sqrt(25))        # 5.0
print(pi)              # 3.14159...

# Standard library highlights
import os, sys, re, json, datetime
import collections, itertools, functools

# os module
os.getcwd()          # current directory
os.listdir(".")      # list files
os.path.join(a, b)   # safe path join
os.path.exists(path) # check if exists

# datetime
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)
print(now.strftime("%Y-%m-%d %H:%M"))

# __name__ guard
if __name__ == "__main__":
    # Only runs when THIS file is executed directly
    # NOT when imported as a module
    main()
      </pre>
    `,
    notes: [
      { title: 'import', code: 'import module\nfrom module import func' },
      { title: 'Alias', code: 'import numpy as np' },
      { title: '__name__', code: 'if __name__ == "__main__": main()' },
      { title: 'pip', code: 'pip install package\npip list' },
    ]
  },

  {
    id: 'py_iterators', order: 15, type: 'python',
    icon: '🔄', title: 'Iterators & Generators',
    desc: 'iter(), next(), yield, generator functions, generator expressions, lazy evaluation',
    subtopics: ['iter/next', 'yield', 'Generator functions', 'Generator expressions'],
    content: `
      <h2>🔄 Iterators</h2>
      <pre>
lst = [1, 2, 3]
it = iter(lst)
print(next(it))  # 1
print(next(it))  # 2
print(next(it))  # 3
# next(it)       # StopIteration!

# Custom iterator
class Counter:
    def __init__(self, stop):
        self.current = 0
        self.stop = stop

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.stop:
            raise StopIteration
        self.current += 1
        return self.current

for n in Counter(5):
    print(n)  # 1 2 3 4 5

# Generator function (uses yield)
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
for _ in range(10):
    print(next(gen), end=" ")
# 0 1 1 2 3 5 8 13 21 34

# Generator expression (lazy)
gen = (x**2 for x in range(1000000))  # No memory used!
print(next(gen))  # 0
      </pre>
    `,
    notes: [
      { title: 'yield', code: 'def gen():\n    yield value  # pauses here' },
      { title: 'Lazy eval', code: 'Generators compute on demand → memory efficient' },
      { title: 'Gen expr', code: '(x**2 for x in range(10))' },
      { title: 'iter/next', code: 'it = iter(lst)\nnext(it)' },
    ]
  },

  {
    id: 'py_decorators', order: 16, type: 'python',
    icon: '🎨', title: 'Decorators',
    desc: 'Function decorators, class decorators, functools.wraps, property, staticmethod, classmethod',
    subtopics: ['Basic decorator', 'functools.wraps', '@property', '@staticmethod', '@classmethod'],
    content: `
      <h2>🎨 Decorators</h2>
      <pre>
import functools, time

# A decorator is a function that wraps another function
def timer(func):
    @functools.wraps(func)   # preserves func metadata
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_func():
    time.sleep(0.1)

slow_func()  # slow_func took 0.1001s

# Decorator with arguments
def repeat(times):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("Hello!")

hello()  # prints Hello! three times
      </pre>
    `,
    notes: [
      { title: 'Basic decorator', code: 'def dec(f):\n    def wrap(*a,**k): return f(*a,**k)\n    return wrap' },
      { title: '@functools.wraps', code: 'Preserves original function name/docs' },
      { title: '@property', code: 'Makes method act like attribute' },
      { title: '@staticmethod', code: 'No self/cls — utility function in class' },
      { title: '@classmethod', code: 'Takes cls as first arg — factory methods' },
    ]
  },

  {
    id: 'py_comprehensions', order: 17, type: 'python',
    icon: '💡', title: 'Comprehensions',
    desc: 'List, dict, set, and generator comprehensions with advanced filtering',
    subtopics: ['List Comp', 'Dict Comp', 'Set Comp', 'Generator Exp', 'Nested Comp'],
    content: `
      <h2>💡 Comprehensions</h2>
      <pre>
# List Comprehension
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x%2==0]
nested  = [x for row in [[1,2],[3,4]] for x in row]

# Dict Comprehension
sq_dict  = {x: x**2 for x in range(6)}
inverted = {v: k for k, v in {"a":1,"b":2}.items()}

# Set Comprehension
sq_set = {x**2 for x in range(-5, 6)}  # removes duplicates

# Generator Expression (lazy — no [] or {})
gen = (x**2 for x in range(1000000))
total = sum(x**2 for x in range(1000))  # no list created!

# Conditional expression in comprehension
labels = ["even" if x%2==0 else "odd" for x in range(6)]

# Nested comprehension — flatten 2D
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [cell for row in matrix for cell in row]

# 2D list creation
grid = [[0]*3 for _ in range(3)]  # 3×3 zero grid
# WARNING: NOT [[0]*3]*3 — that shares rows!
      </pre>
    `,
    notes: [
      { title: 'List comp', code: '[expr for x in iter if cond]' },
      { title: 'Dict comp', code: '{k: v for k, v in items}' },
      { title: 'Set comp', code: '{expr for x in iter}' },
      { title: 'Gen expr', code: '(expr for x in iter)  ← lazy' },
      { title: 'Nested', code: '[x for row in matrix for x in row]' },
    ]
  },

  {
    id: 'py_regex', order: 18, type: 'python',
    icon: '🔍', title: 'Regular Expressions',
    desc: 'Pattern matching with the re module, groups, flags, and common patterns',
    subtopics: ['re module', 'Patterns', 'Groups', 'Flags', 'Common patterns'],
    content: `
      <h2>🔍 Regular Expressions (re module)</h2>
      <pre>
import re

# Main functions
re.match(pattern, string)    # match at START only
re.search(pattern, string)   # match ANYWHERE
re.findall(pattern, string)  # return all matches (list)
re.finditer(pattern, string) # return iterator of matches
re.sub(pattern, repl, string)# replace matches
re.split(pattern, string)    # split by pattern

# Pattern Syntax
. → any char (except newline)
^ → start of string
$ → end of string
* → 0 or more
+ → 1 or more
? → 0 or 1
{n} → exactly n
{n,m} → between n and m
[] → character class
| → OR
() → group
\d → digit [0-9]
\w → word char [a-zA-Z0-9_]
\s → whitespace
\D,\W,\S → inverse

# Examples
emails = re.findall(r'[\w.+-]+@[\w-]+\.[a-z]{2,}', text)
phone  = re.sub(r'\D', '', "Call: +91-9876543210")  # digits only
result = re.search(r'(\d{4})-(\d{2})-(\d{2})', "2024-01-15")
if result:
    year, month, day = result.groups()
      </pre>
    `,
    notes: [
      { title: '\\d, \\w, \\s', code: '\\d=digit \\w=word \\s=space' },
      { title: 'findall', code: 're.findall(r"\\d+", text)' },
      { title: 'Groups ()', code: 're.search(r"(\\d+)-(\\d+)", s).groups()' },
      { title: 'sub', code: 're.sub(r"\\s+", " ", text)' },
    ]
  },

  {
    id: 'py_advanced', order: 19, type: 'python',
    icon: '🚀', title: 'Advanced Python',
    desc: 'Context managers, slots, metaclasses, dataclasses, type hints, and Pythonic idioms',
    subtopics: ['Context Managers', '__slots__', 'Dataclasses', 'Type Hints', 'Idioms'],
    content: `
      <h2>🚀 Advanced Python</h2>
      <pre>
# Context Manager
from contextlib import contextmanager

@contextmanager
def managed_resource():
    print("Acquiring resource")
    try:
        yield "resource"
    finally:
        print("Releasing resource")

with managed_resource() as r:
    print(f"Using {r}")

# Dataclasses (Python 3.7+)
from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0

    def distance(self):
        return (self.x**2 + self.y**2 + self.z**2)**0.5

p = Point(3.0, 4.0)
print(p)   # Point(x=3.0, y=4.0, z=0.0)

# Type Hints (PEP 484)
def greet(name: str) -> str:
    return f"Hello, {name}"

from typing import List, Dict, Optional, Union, Tuple
def process(items: List[int]) -> Dict[str, int]:
    return {"sum": sum(items), "count": len(items)}

# __slots__
class Point2D:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x, self.y = x, y
# slots prevent __dict__, save memory, faster access
      </pre>
    `,
    notes: [
      { title: 'contextmanager', code: '@contextmanager\ndef f(): yield value' },
      { title: '@dataclass', code: '@dataclass\nclass Point:\n    x: float; y: float' },
      { title: 'Type hints', code: 'def f(x: int) -> str: ...' },
      { title: '__slots__', code: 'Saves memory, prevents dynamic attrs' },
    ]
  },

  {
    id: 'py_stdlib', order: 20, type: 'python',
    icon: '🏗️', title: 'Standard Library & Pythonic Code',
    desc: 'collections, itertools, functools, Pythonic idioms, and best practices',
    subtopics: ['collections', 'itertools', 'functools', 'Pythonic idioms'],
    content: `
      <h2>🏗️ Standard Library Gems</h2>
      <pre>
from collections import Counter, defaultdict, deque, OrderedDict, namedtuple
import itertools
import functools

# Counter
words = "the cat sat on the mat the cat".split()
c = Counter(words)
c.most_common(2)  # [('the',3),('cat',2)]

# defaultdict
dd = defaultdict(list)
dd["fruits"].append("apple")  # no KeyError!

# deque (double-ended queue)
dq = deque([1,2,3], maxlen=5)
dq.appendleft(0)   # [0,1,2,3]
dq.popleft()       # fast O(1)

# namedtuple
Point = namedtuple('Point', ['x','y'])
p = Point(3, 4)
print(p.x, p.y)

# itertools
list(itertools.chain([1,2],[3,4],[5]))  # [1,2,3,4,5]
list(itertools.product("AB","12"))      # AB × 12
list(itertools.combinations([1,2,3],2)) # C(3,2)
list(itertools.permutations([1,2,3],2)) # P(3,2)
itertools.accumulate([1,2,3,4])        # [1,3,6,10]

# functools
functools.reduce(lambda a,b: a+b, [1,2,3,4])  # 10
@functools.lru_cache(maxsize=None)  # memoization
def fib(n): return n if n<=1 else fib(n-1)+fib(n-2)
      </pre>

      <h2>✨ Pythonic Idioms</h2>
      <pre>
# Swap values
a, b = b, a

# Check empty
if not lst: ...   # NOT if len(lst) == 0

# Enumerate instead of range(len)
for i, val in enumerate(lst): ...

# List/dict/set comprehensions over loops
# zip to iterate multiple lists
# any() all() for boolean checks
print(any(x > 5 for x in lst))
print(all(isinstance(x,int) for x in lst))

# Walrus in while
while chunk := f.read(8192):
    process(chunk)
      </pre>
    `,
    notes: [
      { title: 'Counter', code: 'Counter(iterable) → {item: count}' },
      { title: 'defaultdict', code: 'defaultdict(list) → no KeyError' },
      { title: 'deque', code: 'appendleft/popleft are O(1)' },
      { title: 'lru_cache', code: '@functools.lru_cache() → memoize' },
      { title: 'reduce', code: 'functools.reduce(fn, iterable)' },
      { title: 'any/all', code: 'any(x>5 for x in lst)\nall(x>0 for x in lst)' },
    ]
  },
];

// ============================================================
// DSA TOPICS — 17 Topics (Unlocks after Python + 300 questions)
// ============================================================
window.DSA_TOPICS = [
  {
    id: 'dsa_complexity', order: 1, type: 'dsa',
    icon: '📊', title: 'Time & Space Complexity',
    desc: 'Big O notation, best/worst/average case, common complexities, amortized analysis',
    content: `
      <h2>📊 Big O Notation</h2>
      <p>Big O describes the <strong>upper bound</strong> of an algorithm's growth rate as input size n → ∞.</p>
      <pre>
# Common complexities (best to worst):
O(1)       → Constant    — array access, hash lookup
O(log n)   → Logarithmic — binary search, balanced BST
O(n)       → Linear      — linear search, single loop
O(n log n) → Log-linear  — merge sort, heap sort
O(n²)      → Quadratic   — bubble sort, nested loops
O(n³)      → Cubic       — triple nested loops
O(2ⁿ)      → Exponential — subset generation, naive recursion
O(n!)      → Factorial   — permutations

# Space complexity
# O(1) — constant extra space
# O(n) — extra space proportional to input
# O(log n) — recursion stack in binary search

# Drop constants: O(2n) → O(n)
# Drop non-dominant: O(n² + n) → O(n²)
      </pre>
    `,
    notes: [
      { title: 'O(1)', code: 'Array access: arr[i]' },
      { title: 'O(log n)', code: 'Binary search' },
      { title: 'O(n)', code: 'Single pass through array' },
      { title: 'O(n²)', code: 'Nested loops over n' },
      { title: 'O(n log n)', code: 'Merge sort, heap sort' },
    ]
  },

  {
    id: 'dsa_arrays', order: 2, type: 'dsa',
    icon: '📐', title: 'Arrays & Strings',
    desc: 'Two pointers, sliding window, prefix sums, array manipulation techniques',
    content: `
      <h2>📐 Arrays & Key Techniques</h2>
      <pre>
# Two Pointers
def two_sum_sorted(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target: return [l, r]
        elif s < target: l += 1
        else: r -= 1
    return [-1, -1]

# Sliding Window — max sum subarray of size k
def max_sum_window(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Prefix Sum
def range_sum(arr, l, r):
    prefix = [0] * (len(arr)+1)
    for i, x in enumerate(arr):
        prefix[i+1] = prefix[i] + x
    return prefix[r+1] - prefix[l]

# Kadane's Algorithm — maximum subarray sum
def max_subarray(nums):
    max_sum = curr = nums[0]
    for n in nums[1:]:
        curr = max(n, curr + n)
        max_sum = max(max_sum, curr)
    return max_sum
      </pre>
    `,
    notes: [
      { title: 'Two Pointers', code: 'l, r = 0, n-1\nwhile l < r: move based on condition' },
      { title: 'Sliding Window', code: 'expand right, shrink left' },
      { title: 'Prefix Sum', code: 'pre[i] = pre[i-1] + arr[i]' },
      { title: "Kadane's", code: 'curr = max(n, curr+n)' },
    ]
  },

  {
    id: 'dsa_linked_list', order: 3, type: 'dsa',
    icon: '🔗', title: 'Linked Lists',
    desc: 'Singly, doubly, circular linked lists; reversal, cycle detection, merge',
    content: `
      <h2>🔗 Linked Lists</h2>
      <pre>
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Reverse a linked list
def reverse(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

# Detect cycle (Floyd's)
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast: return True
    return False

# Find middle (slow/fast pointers)
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow
      </pre>
    `,
    notes: [
      { title: 'Reverse LL', code: 'prev, curr = None, head\nwhile curr: ... prev = curr' },
      { title: "Floyd's Cycle", code: 'slow=fast=head\nfast & fast.next advance twice' },
      { title: 'Middle node', code: 'slow 1x, fast 2x → slow at middle' },
    ]
  },

  {
    id: 'dsa_stacks', order: 4, type: 'dsa',
    icon: '📚', title: 'Stacks & Queues',
    desc: 'Stack/Queue implementations, monotonic stack, deque, LRU Cache',
    content: `<h2>📚 Stacks & Queues</h2>
      <pre>
# Stack (LIFO) — Python list
stack = []
stack.append(1)  # push
stack.pop()      # pop (raises IndexError if empty)
stack[-1]        # peek

# Balanced parentheses
def is_valid(s):
    stack, pairs = [], {')':'(',']':'[','}':'{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else:
            stack.pop()
    return not stack

# Queue (FIFO) — use deque!
from collections import deque
q = deque()
q.append(1)      # enqueue
q.popleft()      # dequeue O(1)

# Monotonic Stack — next greater element
def next_greater(arr):
    n = len(arr)
    res = [-1] * n
    stack = []
    for i, x in enumerate(arr):
        while stack and arr[stack[-1]] < x:
            res[stack.pop()] = x
        stack.append(i)
    return res
      </pre>`,
    notes: [
      { title: 'Stack', code: 'list.append() → push\nlist.pop() → pop' },
      { title: 'Queue', code: 'deque.append() → enqueue\ndeque.popleft() → dequeue' },
      { title: 'Monotonic Stack', code: 'Next greater/smaller element problems' },
    ]
  },

  {
    id: 'dsa_hashing', order: 5, type: 'dsa',
    icon: '#️⃣', title: 'Hashing & Hash Maps',
    desc: 'HashMap operations, collision handling, frequency counting, anagram detection',
    content: `<h2>#️⃣ Hashing</h2>
      <pre>
# Frequency count — anagram check
def is_anagram(s, t):
    if len(s) != len(t): return False
    from collections import Counter
    return Counter(s) == Counter(t)

# Two Sum — O(n) with hash map
def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        comp = target - n
        if comp in seen:
            return [seen[comp], i]
        seen[n] = i
    return []

# Group anagrams
def group_anagrams(strs):
    d = {}
    for s in strs:
        key = tuple(sorted(s))
        d.setdefault(key, []).append(s)
    return list(d.values())
      </pre>`,
    notes: [
      { title: 'Two Sum trick', code: 'seen = {}\ncomp = target - num\nif comp in seen: found!' },
      { title: 'Freq count', code: 'Counter(iterable)' },
      { title: 'Group anagrams', code: 'key = tuple(sorted(s))' },
    ]
  },

  {
    id: 'dsa_recursion', order: 6, type: 'dsa',
    icon: '🌀', title: 'Recursion & Backtracking',
    desc: 'Recursive thinking, backtracking template, N-Queens, subsets, permutations',
    content: `<h2>🌀 Recursion & Backtracking</h2>
      <pre>
# Backtracking template
def backtrack(candidates, current, result, ...):
    if base_case:
        result.append(list(current))
        return
    for choice in candidates:
        current.append(choice)
        backtrack(...)
        current.pop()  # undo (backtrack)

# All subsets
def subsets(nums):
    res, curr = [], []
    def bt(start):
        res.append(list(curr))
        for i in range(start, len(nums)):
            curr.append(nums[i])
            bt(i + 1)
            curr.pop()
    bt(0)
    return res

# All permutations
def permute(nums):
    res, used = [], [False]*len(nums)
    def bt():
        if len(curr) == len(nums):
            res.append(list(curr))
            return
        for i, n in enumerate(nums):
            if not used[i]:
                used[i] = True; curr.append(n)
                bt()
                curr.pop(); used[i] = False
    curr = []; bt()
    return res
      </pre>`,
    notes: [
      { title: 'Backtracking', code: 'choose → explore → undo' },
      { title: 'Base case', code: 'Always define when recursion stops' },
      { title: 'Subsets', code: 'bt(start): append; loop from start' },
    ]
  },

  {
    id: 'dsa_sorting', order: 7, type: 'dsa',
    icon: '🔢', title: 'Sorting Algorithms',
    desc: 'Bubble, selection, insertion, merge, quick, heap sort — implementations and analysis',
    content: `<h2>🔢 Sorting Algorithms</h2>
      <pre>
# Merge Sort — O(n log n) stable
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    L = merge_sort(arr[:mid])
    R = merge_sort(arr[mid:])
    return merge(L, R)

def merge(L, R):
    res, i, j = [], 0, 0
    while i < len(L) and j < len(R):
        if L[i] <= R[j]: res.append(L[i]); i+=1
        else:             res.append(R[j]); j+=1
    return res + L[i:] + R[j:]

# Quick Sort — O(n log n) avg, O(n²) worst
def quick_sort(arr, lo, hi):
    if lo < hi:
        p = partition(arr, lo, hi)
        quick_sort(arr, lo, p-1)
        quick_sort(arr, p+1, hi)

def partition(arr, lo, hi):
    pivot = arr[hi]
    i = lo - 1
    for j in range(lo, hi):
        if arr[j] <= pivot:
            i += 1; arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[hi] = arr[hi], arr[i+1]
    return i + 1
      </pre>`,
    notes: [
      { title: 'Merge Sort', code: 'O(n log n), stable, O(n) space' },
      { title: 'Quick Sort', code: 'O(n log n) avg, O(n²) worst, in-place' },
      { title: 'Built-in', code: 'sorted(lst) or lst.sort()  → Timsort O(n log n)' },
    ]
  },

  {
    id: 'dsa_binary_search', order: 8, type: 'dsa',
    icon: '🎯', title: 'Binary Search',
    desc: 'Binary search template, search space reduction, rotated arrays, search answer',
    content: `<h2>🎯 Binary Search</h2>
      <pre>
# Classic binary search — O(log n)
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2  # avoid overflow
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1

# Find leftmost position
def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target: lo = mid + 1
        else: hi = mid
    return lo

# Search in rotated sorted array
def search_rotated(nums, target):
    lo, hi = 0, len(nums)-1
    while lo <= hi:
        mid = (lo+hi)//2
        if nums[mid] == target: return mid
        if nums[lo] <= nums[mid]:  # left half sorted
            if nums[lo] <= target < nums[mid]: hi = mid-1
            else: lo = mid+1
        else:  # right half sorted
            if nums[mid] < target <= nums[hi]: lo = mid+1
            else: hi = mid-1
    return -1
      </pre>`,
    notes: [
      { title: 'Template', code: 'lo, hi = 0, n-1\nmid = lo + (hi-lo)//2' },
      { title: 'Avoid overflow', code: 'mid = lo + (hi-lo)//2  NOT (lo+hi)//2' },
      { title: 'Lower bound', code: 'while lo<hi: if arr[mid]<t: lo=mid+1 else: hi=mid' },
    ]
  },

  {
    id: 'dsa_trees', order: 9, type: 'dsa',
    icon: '🌲', title: 'Trees (BST & Traversals)',
    desc: 'Binary trees, BST operations, DFS traversals (inorder/preorder/postorder), BFS, height',
    content: `<h2>🌲 Trees</h2>
      <pre>
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

# Inorder (L-Root-R) → sorted for BST
def inorder(root):
    return inorder(root.left) + [root.val] + inorder(root.right) if root else []

# Preorder (Root-L-R) → copy tree structure
def preorder(root):
    return [root.val] + preorder(root.left) + preorder(root.right) if root else []

# Postorder (L-R-Root) → delete tree
def postorder(root):
    return postorder(root.left) + postorder(root.right) + [root.val] if root else []

# BFS — level order
def level_order(root):
    from collections import deque
    if not root: return []
    q, res = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res

# Height of binary tree
def height(root):
    if not root: return 0
    return 1 + max(height(root.left), height(root.right))
      </pre>`,
    notes: [
      { title: 'Inorder', code: 'L → Root → R  (sorted for BST)' },
      { title: 'Preorder', code: 'Root → L → R' },
      { title: 'BFS', code: 'deque, process level by level' },
      { title: 'Height', code: '1 + max(left, right)' },
    ]
  },

  {
    id: 'dsa_heap', order: 10, type: 'dsa',
    icon: '⛰️', title: 'Heaps & Priority Queue',
    desc: 'Min/max heap, heapq module, K largest/smallest elements, median finder',
    content: `<h2>⛰️ Heaps</h2>
      <pre>
import heapq

# Python has MIN heap by default
heap = [3, 1, 4, 1, 5]
heapq.heapify(heap)          # O(n)
heapq.heappush(heap, 2)      # O(log n)
smallest = heapq.heappop(heap) # O(log n)
smallest = heap[0]           # peek O(1)

# MAX heap — negate values!
max_heap = [-x for x in [3,1,4,1,5]]
heapq.heapify(max_heap)
biggest = -heapq.heappop(max_heap)

# K largest elements
def k_largest(nums, k):
    return heapq.nlargest(k, nums)

def k_smallest(nums, k):
    return heapq.nsmallest(k, nums)

# Top K frequent elements
from collections import Counter
def top_k_frequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)
      </pre>`,
    notes: [
      { title: 'Min heap', code: 'heapq.heapify(lst)\nheapq.heappush(h, x)\nheapq.heappop(h)' },
      { title: 'Max heap', code: 'negate values: -x' },
      { title: 'K largest', code: 'heapq.nlargest(k, lst)' },
    ]
  },

  {
    id: 'dsa_graphs', order: 11, type: 'dsa',
    icon: '🕸️', title: 'Graphs (BFS & DFS)',
    desc: 'Graph representation, BFS, DFS, connected components, shortest path',
    content: `<h2>🕸️ Graphs</h2>
      <pre>
# Graph as adjacency list
graph = {0:[1,2], 1:[0,3], 2:[0], 3:[1]}

# BFS — shortest path in unweighted graph
from collections import deque
def bfs(graph, start, end):
    q = deque([[start]])
    visited = {start}
    while q:
        path = q.popleft()
        node = path[-1]
        if node == end: return path
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                q.append(path + [nb])
    return None

# DFS — iterative
def dfs(graph, start):
    visited, stack, order = set(), [start], []
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node); order.append(node)
            stack.extend(reversed(graph[node]))
    return order

# Number of islands (grid DFS)
def num_islands(grid):
    count = 0
    def sink(r, c):
        if 0<=r<len(grid) and 0<=c<len(grid[0]) and grid[r][c]=="1":
            grid[r][c]="0"
            sink(r+1,c); sink(r-1,c); sink(r,c+1); sink(r,c-1)
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c]=="1": count+=1; sink(r,c)
    return count
      </pre>`,
    notes: [
      { title: 'BFS', code: 'deque, visited set, O(V+E)' },
      { title: 'DFS', code: 'stack or recursion, O(V+E)' },
      { title: 'Islands', code: 'Sink visited cells (mark "0")' },
    ]
  },

  {
    id: 'dsa_dp', order: 12, type: 'dsa',
    icon: '🧩', title: 'Dynamic Programming',
    desc: 'Memoization, tabulation, classic DP problems (knapsack, LCS, coin change)',
    content: `<h2>🧩 Dynamic Programming</h2>
      <pre>
# Fibonacci with memoization
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# Coin Change (bottom-up tabulation)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for x in range(coin, amount+1):
            dp[x] = min(dp[x], dp[x-coin]+1)
    return dp[amount] if dp[amount] != float('inf') else -1

# Longest Common Subsequence (LCS)
def lcs(s, t):
    m, n = len(s), len(t)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s[i-1] == t[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(capacity+1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], values[i-1]+dp[i-1][w-weights[i-1]])
    return dp[n][capacity]
      </pre>`,
    notes: [
      { title: 'Memoization', code: '@lru_cache(maxsize=None)' },
      { title: 'Coin Change', code: 'dp[x] = min(dp[x], dp[x-coin]+1)' },
      { title: 'LCS', code: 'if s[i]==t[j]: dp[i][j]=dp[i-1][j-1]+1' },
      { title: 'DP steps', code: '1. Define state\n2. Recurrence\n3. Base case\n4. Order' },
    ]
  },

  {
    id: 'dsa_greedy', order: 13, type: 'dsa',
    icon: '💰', title: 'Greedy Algorithms',
    desc: 'Greedy approach, activity selection, jump game, interval scheduling',
    content: `<h2>💰 Greedy Algorithms</h2>
      <pre>
# Jump Game
def can_jump(nums):
    reach = 0
    for i, n in enumerate(nums):
        if i > reach: return False
        reach = max(reach, i + n)
    return True

# Meeting rooms II
def min_meeting_rooms(intervals):
    import heapq
    intervals.sort()
    heap = []  # end times
    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heapreplace(heap, end)
        else:
            heapq.heappush(heap, end)
    return len(heap)

# Fractional Knapsack
def fractional_knapsack(weights, values, capacity):
    items = sorted(zip(values, weights), key=lambda x: x[0]/x[1], reverse=True)
    total = 0.0
    for v, w in items:
        if capacity >= w: total += v; capacity -= w
        else: total += v * (capacity/w); break
    return total
      </pre>`,
    notes: [
      { title: 'Greedy choice', code: 'Always pick locally optimal → globally optimal' },
      { title: 'Jump Game', code: 'Track max reachable index' },
      { title: 'Interval', code: 'Sort by start time' },
    ]
  },

  {
    id: 'dsa_divide_conquer', order: 14, type: 'dsa',
    icon: '✂️', title: 'Divide & Conquer',
    desc: 'Divide, conquer, combine paradigm — merge sort, quick sort, power, matrix multiply',
    content: `<h2>✂️ Divide & Conquer</h2>
      <pre>
# Fast Power — O(log n)
def fast_pow(base, exp, mod=None):
    result = 1
    while exp > 0:
        if exp & 1:
            result = result * base
            if mod: result %= mod
        base = base * base
        if mod: base %= mod
        exp >>= 1
    return result

# Count inversions (merge sort approach)
def count_inversions(arr):
    if len(arr) <= 1: return arr, 0
    mid = len(arr) // 2
    L, lc = count_inversions(arr[:mid])
    R, rc = count_inversions(arr[mid:])
    merged, mc = merge_count(L, R)
    return merged, lc + rc + mc

def merge_count(L, R):
    res, count, i, j = [], 0, 0, 0
    while i<len(L) and j<len(R):
        if L[i]<=R[j]: res.append(L[i]); i+=1
        else: res.append(R[j]); count+=len(L)-i; j+=1
    return res+L[i:]+R[j:], count
      </pre>`,
    notes: [
      { title: 'D&C steps', code: '1. Divide\n2. Conquer (recurse)\n3. Combine' },
      { title: 'Fast Power', code: 'exp >>= 1 (halve each step)' },
    ]
  },

  {
    id: 'dsa_trie', order: 15, type: 'dsa',
    icon: '🌳', title: 'Tries (Prefix Trees)',
    desc: 'Trie implementation, prefix search, autocomplete, word search',
    content: `<h2>🌳 Tries</h2>
      <pre>
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children: return False
            node = node.children[ch]
        return node.is_end

    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children: return False
            node = node.children[ch]
        return True

    def autocomplete(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children: return []
            node = node.children[ch]
        results = []
        def dfs(node, path):
            if node.is_end: results.append(prefix + path)
            for ch, child in node.children.items():
                dfs(child, path+ch)
        dfs(node, "")
        return results
      </pre>`,
    notes: [
      { title: 'Insert', code: 'O(m) where m = word length' },
      { title: 'Search', code: 'O(m) — check is_end at last char' },
      { title: 'Prefix check', code: 'starts_with() → no is_end check' },
    ]
  },

  {
    id: 'dsa_advanced_graphs', order: 16, type: 'dsa',
    icon: '🗺️', title: 'Advanced Graph Algorithms',
    desc: "Dijkstra's, topological sort, union-find, Bellman-Ford",
    content: `<h2>🗺️ Advanced Graphs</h2>
      <pre>
import heapq

# Dijkstra's — shortest path (non-negative weights)
def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist

# Topological Sort (Kahn's BFS)
def topo_sort(n, edges):
    from collections import deque, defaultdict
    adj = defaultdict(list)
    indegree = [0] * n
    for u, v in edges:
        adj[u].append(v); indegree[v] += 1
    q = deque(i for i in range(n) if indegree[i]==0)
    order = []
    while q:
        u = q.popleft(); order.append(u)
        for v in adj[u]:
            indegree[v] -= 1
            if indegree[v] == 0: q.append(v)
    return order if len(order)==n else []  # [] = cycle

# Union-Find (Disjoint Set)
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [0] * n
    def find(self, x):
        if self.par[x] != x:
            self.par[x] = self.find(self.par[x])
        return self.par[x]
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]: px, py = py, px
        self.par[py] = px
        if self.rank[px] == self.rank[py]: self.rank[px] += 1
        return True
      </pre>`,
    notes: [
      { title: "Dijkstra's", code: 'Min heap + dist array, O((V+E) log V)' },
      { title: 'Topological', code: "Kahn's: process 0-indegree first" },
      { title: 'Union-Find', code: 'find(x) with path compression' },
    ]
  },

  {
    id: 'dsa_segment_tree', order: 17, type: 'dsa',
    icon: '🌿', title: 'Segment Trees & Advanced',
    desc: 'Segment tree for range queries, lazy propagation, sparse table',
    content: `<h2>🌿 Segment Trees</h2>
      <pre>
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n-1)

    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
            return
        mid = (start + end) // 2
        self.build(arr, 2*node+1, start, mid)
        self.build(arr, 2*node+2, mid+1, end)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]

    def query(self, node, start, end, l, r):
        if r < start or end < l: return 0
        if l <= start and end <= r: return self.tree[node]
        mid = (start + end) // 2
        left  = self.query(2*node+1, start, mid, l, r)
        right = self.query(2*node+2, mid+1, end, l, r)
        return left + right

    def update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val; return
        mid = (start + end) // 2
        if idx <= mid: self.update(2*node+1, start, mid, idx, val)
        else:          self.update(2*node+2, mid+1, end, idx, val)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
      </pre>`,
    notes: [
      { title: 'Segment Tree', code: 'Range sum/min/max queries, O(log n) update' },
      { title: 'Build', code: 'O(n) — bottom up' },
      { title: 'Query/Update', code: 'O(log n)' },
    ]
  },
];

// ============================================================
// BACKEND TOPICS (Future — architecture ready)
// ============================================================
window.BACKEND_TOPICS = [
  { id: 'be_sql_basics',  order: 1, type: 'backend', icon: '🗄️', title: 'SQL Basics', desc: 'SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY' },
  { id: 'be_sql_adv',     order: 2, type: 'backend', icon: '🔗', title: 'Advanced SQL', desc: 'JOINs, subqueries, CTEs, window functions, indexes' },
  { id: 'be_rest_api',    order: 3, type: 'backend', icon: '🌐', title: 'REST API Concepts', desc: 'HTTP methods, status codes, RESTful design, JSON' },
  { id: 'be_fastapi',     order: 4, type: 'backend', icon: '⚡', title: 'FastAPI', desc: 'Routes, Pydantic models, async, dependency injection' },
  { id: 'be_auth',        order: 5, type: 'backend', icon: '🔐', title: 'Authentication & JWT', desc: 'JWT tokens, OAuth 2.0, session management, bcrypt' },
  { id: 'be_db_design',   order: 6, type: 'backend', icon: '📐', title: 'Database Design', desc: 'Normalization, ER diagrams, indexing, transactions, ACID' },
  { id: 'be_deployment',  order: 7, type: 'backend', icon: '🚀', title: 'Deployment', desc: 'Docker, CI/CD, Heroku, Railway, environment variables' },
];

// ============================================================
// HELPER: Get all topics flattened
// ============================================================
window.getAllTopics = function() {
  return [
    ...window.PYTHON_TOPICS,
    ...window.DSA_TOPICS,
    ...window.BACKEND_TOPICS,
  ];
};

window.getTopicById = function(id) {
  return window.getAllTopics().find(t => t.id === id);
};
