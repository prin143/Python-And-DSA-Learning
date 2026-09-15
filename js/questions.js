// ============================================================
// PyLearn Pro — Question Bank
// 30+ LeetCode/Interview level questions per topic
// Types: mcq, code_output, fill_blank, debug, code_write
// ============================================================

window.QUESTION_BANK = {

// ============================================================
// PYTHON BASICS — 35 Questions
// ============================================================
py_basics: [
  { id:'pyb001',type:'mcq',difficulty:'easy',question:'What is the output of `print(type(42))`?',options:['<class "number">','<class "int">','<class "integer">','<class "float">'],correct:1,explanation:'42 is an integer in Python. type() returns the class. int is the correct type name.',points:1 },
  { id:'pyb002',type:'mcq',difficulty:'easy',question:'Which of the following is a VALID Python variable name?',options:['2variable','my-variable','my_variable','my variable'],correct:2,explanation:'Variable names cannot start with a digit, cannot contain hyphens, and cannot have spaces. Underscores are allowed.',points:1 },
  { id:'pyb003',type:'mcq',difficulty:'easy',question:'What does `bool(0)` return?',options:['True','False','None','0'],correct:1,explanation:'In Python, 0 is falsy. bool(0) returns False. Any non-zero number is truthy.',points:1 },
  { id:'pyb004',type:'code_output',difficulty:'easy',question:'What is the output of the following code?',code:'x = 10\ny = 3.0\nprint(type(x + y))',options:["<class 'int'>","<class 'float'>","<class 'str'>","TypeError"],correct:1,explanation:'When int and float are added, Python automatically converts int to float. Result is float.',points:1 },
  { id:'pyb005',type:'mcq',difficulty:'easy',question:'Which of the following correctly creates an empty dictionary?',options:['[]','()','{}','set()'],correct:2,explanation:'{} creates an empty dict. [] is list, () is tuple, set() is empty set (not {}).',points:1 },
  { id:'pyb006',type:'code_output',difficulty:'easy',question:'What is the output?',code:'print(int(3.99))',options:['4','3','3.99','Error'],correct:1,explanation:'int() truncates (does not round). int(3.99) removes the decimal part giving 3.',points:1 },
  { id:'pyb007',type:'mcq',difficulty:'medium',question:'What does `type(None)` return?',options:["<class 'NoneType'>","<class 'null'>","<class 'void'>","<class 'None'>"],correct:0,explanation:"None is its own type: NoneType. None is the single instance of NoneType.",points:1 },
  { id:'pyb008',type:'fill_blank',difficulty:'easy',question:'Complete the code to convert string "123" to integer:\n```python\nx = ___("123")\n```',answer:'int',explanation:'int() converts a numeric string to an integer.',points:1 },
  { id:'pyb009',type:'code_output',difficulty:'medium',question:'What is printed?',code:'x = "5"\ny = 3\nprint(x * y)',options:['15','555','Error','53'],correct:1,explanation:'String * int repeats the string. "5" * 3 = "555". This is string repetition, not multiplication.',points:1 },
  { id:'pyb010',type:'mcq',difficulty:'medium',question:'Which of these is falsy in Python?',options:['[0]',' ','0.001','[]'],correct:3,explanation:'An empty list [] is falsy. [0] is truthy (non-empty), " " is truthy (non-empty string), 0.001 is truthy.',points:1 },
  { id:'pyb011',type:'code_output',difficulty:'easy',question:'What does this print?',code:'name = "Alice"\nprint(f"Hello, {name}! You are {2+2*5} years old.")',options:['Hello, Alice! You are 4+10 years old.','Hello, Alice! You are 12 years old.','Hello, Alice! You are 14 years old.','SyntaxError'],correct:1,explanation:'f-strings evaluate expressions. 2+2*5 = 2+10 = 12 (multiplication first).',points:1 },
  { id:'pyb012',type:'mcq',difficulty:'easy',question:'Which keyword cannot be used as a variable name?',options:['total','_sum','result','for'],correct:3,explanation:'"for" is a Python keyword reserved for loops. Keywords cannot be variable names.',points:1 },
  { id:'pyb013',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = bool("")\ny = bool("False")\nprint(x, y)',options:['False False','True True','False True','True False'],correct:2,explanation:'Empty string "" is falsy → False. Non-empty string "False" is truthy → True (content doesn\'t matter for bool conversion).',points:1 },
  { id:'pyb014',type:'mcq',difficulty:'medium',question:'What happens when you run `int("3.14")`?',options:['Returns 3','Returns 3.14','Raises ValueError','Raises TypeError'],correct:2,explanation:'int() cannot directly convert a string containing a decimal point. It raises ValueError. Use int(float("3.14")) instead.',points:2 },
  { id:'pyb015',type:'code_output',difficulty:'medium',question:'What is the output?',code:'a = 5\nb = 2\nprint(a // b, a % b, a / b)',options:['2 1 2.5','2.5 1 2','2 1 2','2.0 1 2.5'],correct:0,explanation:'// is floor division (2), % is modulus (1), / is true division (2.5).',points:1 },
  { id:'pyb016',type:'fill_blank',difficulty:'easy',question:'Complete: Print "Hello World" with a tab between words using print():\n```python\nprint("Hello", "World", ___="\\t")\n```',answer:'sep',explanation:'The sep parameter controls the separator between print() arguments. Default is space.',points:1 },
  { id:'pyb017',type:'mcq',difficulty:'medium',question:'What is the output of `print(type(True))`?',options:["<class 'bool'>","<class 'int'>","<class 'str'>","<class 'boolean'>"],correct:0,explanation:"True and False are of type bool. bool is a subclass of int in Python.",points:1 },
  { id:'pyb018',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 10\ny = x\nx = 20\nprint(y)',options:['20','10','None','Error'],correct:1,explanation:'Integers are immutable. y = x copies the VALUE 10. When x is reassigned to 20, y still holds 10.',points:2 },
  { id:'pyb019',type:'debug',difficulty:'medium',question:'Find the bug in this code:\n```python\nname = input("Enter name: ")\nage = input("Enter age: ")\nif age > 18:\n    print("Adult")\n```',options:['There is no bug','age should be converted to int: int(input(...))','name should be checked not age','print statement is wrong'],correct:1,explanation:'input() always returns a string. You cannot compare a string with an integer using >. Convert: age = int(input(...))',points:2 },
  { id:'pyb020',type:'mcq',difficulty:'easy',question:'What is the correct comment syntax in Python?',options:['// This is a comment','/* This is a comment */','# This is a comment','-- This is a comment'],correct:2,explanation:'Python uses # for single-line comments. Multi-line comments use triple quotes but are actually docstrings.',points:1 },
  { id:'pyb021',type:'code_output',difficulty:'medium',question:'What does this print?',code:'x = 0b1010\nprint(x)',options:['0b1010','10','8','1010'],correct:1,explanation:'0b1010 is binary literal = 1*8 + 0*4 + 1*2 + 0*1 = 10 in decimal. print() shows decimal by default.',points:2 },
  { id:'pyb022',type:'mcq',difficulty:'hard',question:'Which of these is a mutable data type in Python?',options:['int','str','tuple','list'],correct:3,explanation:'Lists are mutable (can be changed). int, str, and tuple are immutable in Python.',points:2 },
  { id:'pyb023',type:'code_output',difficulty:'hard',question:'What is the output?',code:'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)',options:['[1, 2, 3]','[1, 2, 3, 4]','[1, 2, 3][4]','Error'],correct:1,explanation:'b = a does NOT copy the list. Both a and b point to the SAME list object. Modifying through b also changes what a sees.',points:2 },
  { id:'pyb024',type:'fill_blank',difficulty:'medium',question:'Complete to check if x is between 1 and 10 (inclusive) using Python\'s chained comparison:\n```python\nresult = 1 ___ x ___ 10\n```',answer:'<= x <=',explanation:'Python supports chained comparisons: 1 <= x <= 10. This checks if x is between 1 and 10 inclusive.',points:1 },
  { id:'pyb025',type:'mcq',difficulty:'medium',question:'What is the output of `print(10 == 10.0)`?',options:['False','True','TypeError','None'],correct:1,explanation:'10 == 10.0 is True because Python compares values across numeric types. int(10) equals float(10.0).',points:1 },
  { id:'pyb026',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = "Python"\nprint(x[1:4])',options:['Pyt','yth','ytho','ython'],correct:1,explanation:'Slicing s[1:4] returns characters at indices 1, 2, 3 (not 4). "Python"[1:4] = "yth".',points:1 },
  { id:'pyb027',type:'mcq',difficulty:'hard',question:'What is the output of `print(0.1 + 0.2 == 0.3)`?',options:['True','False','Error','None'],correct:1,explanation:'Due to floating-point representation issues, 0.1 + 0.2 = 0.30000000000000004 ≠ 0.3. Always use round() or math.isclose() for float comparisons.',points:2 },
  { id:'pyb028',type:'code_output',difficulty:'easy',question:'What does this print?',code:'print("Hello" + " " + "World")',options:['Hello World','HelloWorld','Hello + World','Error'],correct:0,explanation:'+ operator concatenates strings in Python. "Hello" + " " + "World" = "Hello World".',points:1 },
  { id:'pyb029',type:'mcq',difficulty:'medium',question:'Which function is used to get the number of characters in a string?',options:['count()','size()','len()','length()'],correct:2,explanation:'len() returns the length (number of characters) of a string, list, tuple, etc.',points:1 },
  { id:'pyb030',type:'debug',difficulty:'hard',question:'What is wrong with this code?\n```python\nfor i in range(10):\n    if i = 5:\n        print("Found!")\n```',options:['range(10) should be range(0,10)','= should be == (assignment vs comparison)','print needs parentheses','No bug exists'],correct:1,explanation:'= is assignment, == is comparison. In a condition, you must use == not =. This causes a SyntaxError.',points:2 },
  { id:'pyb031',type:'code_output',difficulty:'medium',question:'What is printed?',code:'x = None\nprint(x == False)',options:['True','False','None','TypeError'],correct:1,explanation:'None == False is False. None is not equal to False in Python. Use "is None" to check for None.',points:2 },
  { id:'pyb032',type:'mcq',difficulty:'hard',question:'What is the difference between `is` and `==`?',options:['No difference','== compares values, is compares object identity','is compares values, == compares identity','== is for strings only'],correct:1,explanation:'== checks if values are equal. is checks if both variables point to the SAME object in memory.',points:2 },
  { id:'pyb033',type:'code_output',difficulty:'hard',question:'What is the output?',code:'a = 257\nb = 257\nprint(a is b)',options:['True','False','Error','Depends on Python version'],correct:3,explanation:'Python caches small integers (-5 to 256). 257 is outside this range, so a and b are different objects. But technically, at module level CPython might optimize this.',points:2 },
  { id:'pyb034',type:'fill_blank',difficulty:'medium',question:'Complete to create a multi-line string:\n```python\ntext = """Line 1\n___\nLine 3"""\n```',answer:'Line 2',explanation:'Triple quotes allow multi-line strings in Python.',points:1 },
  { id:'pyb035',type:'code_write',difficulty:'hard',question:'Write a Python function `convert_temp(celsius)` that converts Celsius to Fahrenheit using the formula: F = (C × 9/5) + 32. Return the result rounded to 2 decimal places.',answer_template:'def convert_temp(celsius):\n    # Your code here\n    pass',test_cases:[{input:'convert_temp(0)',expected:'32.0'},{input:'convert_temp(100)',expected:'212.0'},{input:'convert_temp(37)',expected:'98.6'}],points:3 },
],

// ============================================================
// PYTHON OPERATORS — 30 Questions
// ============================================================
py_operators: [
  { id:'pyo001',type:'code_output',difficulty:'easy',question:'What is the output?',code:'print(17 // 5)',options:['3','3.4','4','2'],correct:0,explanation:'// is floor division. 17 // 5 = 3 (rounds down to nearest integer).',points:1 },
  { id:'pyo002',type:'code_output',difficulty:'easy',question:'What is the output?',code:'print(17 % 5)',options:['3','2','0','1'],correct:1,explanation:'% is modulus (remainder). 17 = 5*3 + 2, so 17 % 5 = 2.',points:1 },
  { id:'pyo003',type:'mcq',difficulty:'easy',question:'What does the `**` operator do in Python?',options:['Bitwise XOR','Exponentiation','String repetition','Matrix multiply'],correct:1,explanation:'** is the exponentiation operator. 2**10 = 1024.',points:1 },
  { id:'pyo004',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = 5\nx += 3\nx *= 2\nprint(x)',options:['16','10','13','11'],correct:0,explanation:'x starts at 5. x += 3 → x = 8. x *= 2 → x = 16.',points:1 },
  { id:'pyo005',type:'code_output',difficulty:'medium',question:'What is the output?',code:'print(True + True + False)',options:['TrueTrueFalse','2','True','Error'],correct:1,explanation:'In Python, bool is a subclass of int. True=1, False=0. 1+1+0=2.',points:2 },
  { id:'pyo006',type:'mcq',difficulty:'medium',question:'What is the result of `-17 // 5`?',options:['-3','-4','3','4'],correct:1,explanation:'Floor division always rounds DOWN (toward negative infinity). -17/5 = -3.4, floor = -4.',points:2 },
  { id:'pyo007',type:'code_output',difficulty:'medium',question:'What is the output?',code:'print(12 & 10)',options:['2','8','22','14'],correct:1,explanation:'12 = 1100, 10 = 1010. AND: 1100 & 1010 = 1000 = 8.',points:2 },
  { id:'pyo008',type:'code_output',difficulty:'medium',question:'What is the output?',code:'print(12 | 10)',options:['2','8','14','22'],correct:2,explanation:'12 = 1100, 10 = 1010. OR: 1100 | 1010 = 1110 = 14.',points:2 },
  { id:'pyo009',type:'code_output',difficulty:'medium',question:'What is the output?',code:'print(12 ^ 10)',options:['6','8','14','2'],correct:0,explanation:'12 = 1100, 10 = 1010. XOR: 1100 ^ 1010 = 0110 = 6.',points:2 },
  { id:'pyo010',type:'code_output',difficulty:'medium',question:'What is the output?',code:'print(1 << 4)',options:['4','8','16','32'],correct:2,explanation:'Left shift by 4 = multiply by 2^4 = 16. 1 << 4 = 16.',points:2 },
  { id:'pyo011',type:'mcq',difficulty:'medium',question:'Which operator checks if two variables refer to the SAME object?',options:['==','!=','is','in'],correct:2,explanation:'"is" checks object identity (same memory address). "==" checks value equality.',points:1 },
  { id:'pyo012',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = [1,2,3]\ny = [1,2,3]\nprint(x == y, x is y)',options:['True True','False False','True False','False True'],correct:2,explanation:'x == y is True (same values). x is y is False (different list objects in memory).',points:2 },
  { id:'pyo013',type:'mcq',difficulty:'easy',question:'What is the result of `not True and False`?',options:['True','False','None','Error'],correct:1,explanation:'"not" has higher precedence than "and". not True = False. False and False = False.',points:1 },
  { id:'pyo014',type:'code_output',difficulty:'hard',question:'What is the output?',code:'print(2 ** 3 ** 2)',options:['64','512','8','64'],correct:1,explanation:'** is right-associative. 2**3**2 = 2**(3**2) = 2**9 = 512.',points:2 },
  { id:'pyo015',type:'mcq',difficulty:'medium',question:'What does `x //= 3` mean?',options:['x = x // 3','x = 3 // x','x // 3 is evaluated and discarded','SyntaxError'],correct:0,explanation:'//= is a compound assignment. x //= 3 means x = x // 3 (floor division then assign).',points:1 },
  { id:'pyo016',type:'code_output',difficulty:'medium',question:'What is the output?',code:'fruits = ["apple", "banana"]\nprint("mango" not in fruits)',options:['True','False','None','Error'],correct:0,explanation:'"mango" is not in the fruits list, so "not in" returns True.',points:1 },
  { id:'pyo017',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 0\ny = x or 42\nprint(y)',options:['0','42','False','None'],correct:1,explanation:'"or" returns first truthy value. x=0 is falsy, so "or" evaluates and returns 42.',points:2 },
  { id:'pyo018',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 5\ny = x and 0\nprint(y)',options:['5','0','False','True'],correct:1,explanation:'"and" returns first falsy value (or last value if all truthy). x=5 is truthy, so returns 0.',points:2 },
  { id:'pyo019',type:'mcq',difficulty:'hard',question:'What is the value of `~5` in Python?',options:['-5','-6','4','6'],correct:1,explanation:'~x = -(x+1) for integers. ~5 = -(5+1) = -6. Bitwise NOT flips all bits including sign bit.',points:2 },
  { id:'pyo020',type:'code_output',difficulty:'medium',question:'What is the output?',code:'a = 5\nb = 3\nprint(a > b > 1)',options:['True','False','TypeError','1'],correct:0,explanation:'Python supports chained comparisons. 5 > 3 > 1 means (5>3) and (3>1) = True and True = True.',points:2 },
  { id:'pyo021',type:'mcq',difficulty:'medium',question:'What is the operator precedence from HIGHEST to LOWEST?',options:['**, *, +, and','and, *, **, not','*, **, +, or','not, +, *, **'],correct:0,explanation:'Order (high to low): ** > * / // % > + - > comparisons > not > and > or',points:2 },
  { id:'pyo022',type:'code_output',difficulty:'easy',question:'What is the output?',code:'print(3 * "ab")',options:['3ab','ababab','ab3','Error'],correct:1,explanation:'String * int repeats the string. "ab" * 3 = "ababab".',points:1 },
  { id:'pyo023',type:'fill_blank',difficulty:'medium',question:'Complete: Use the walrus operator to assign and check in one expression:\n```python\nif ___ n := len(data)) > 5:\n    print(n)\n```',answer:'(',explanation:'The walrus operator := assigns and returns the value. It needs parentheses inside if statement.',points:2 },
  { id:'pyo024',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 10\nprint(x == 10 == 10.0)',options:['True True','False','True','TypeError'],correct:2,explanation:'Chained comparison: (x==10) and (10==10.0). 10==10 is True, 10==10.0 is True. True and True = True.',points:2 },
  { id:'pyo025',type:'debug',difficulty:'medium',question:'What is wrong with this code?\n```python\nx = 5\nif x = 5:\n    print("Equal")\n```',options:['Missing colon','= should be == in condition','x should be quoted','print is wrong'],correct:1,explanation:'= is assignment, not comparison. In conditions you must use == for equality check.',points:2 },
  { id:'pyo026',type:'code_output',difficulty:'easy',question:'What is the output?',code:'print(10 / 3)',options:['3','3.0','3.333...','3.3333333333333335'],correct:3,explanation:'/ always returns float in Python 3. 10/3 = 3.3333333333333335 (float precision).',points:1 },
  { id:'pyo027',type:'mcq',difficulty:'medium',question:'Which expression checks if `n` is divisible by both 3 and 5?',options:['n % 3 == 0 and n % 5 == 0','n / 3 == 0 and n / 5 == 0','n % 15 and n % 15','n // 3 + n // 5 == 0'],correct:0,explanation:'Use modulo % to check divisibility. n%3==0 checks divisible by 3, n%5==0 by 5, and checks both.',points:1 },
  { id:'pyo028',type:'code_output',difficulty:'hard',question:'What is the output?',code:'print(bool(0), bool(""), bool([]), bool({}), bool(None))',options:['True True True True True','False False False False False','True False False False False','False True True True True'],correct:1,explanation:'All of these are falsy in Python: 0, empty string, empty list, empty dict, and None all convert to False.',points:2 },
  { id:'pyo029',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = 8\nprint(x >> 2)',options:['2','32','4','1'],correct:0,explanation:'Right shift by 2 = divide by 2^2 = 4. 8 >> 2 = 8//4 = 2.',points:2 },
  { id:'pyo030',type:'code_write',difficulty:'hard',question:'Write a function `swap_bits(n, i, j)` that swaps bits at positions i and j of integer n using bitwise operations only (no string conversion).',answer_template:'def swap_bits(n, i, j):\n    # Use bitwise operators only\n    pass',test_cases:[{input:'swap_bits(23, 0, 3)',expected:'16'}],points:3 },
],

// ============================================================
// CONTROL FLOW — 30 Questions
// ============================================================
py_control: [
  { id:'pyc001',type:'code_output',difficulty:'easy',question:'What is the output?',code:'x = 15\nif x > 10:\n    print("A")\nif x > 5:\n    print("B")\nif x > 20:\n    print("C")',options:['A','AB','ABC','A B C'],correct:1,explanation:'Both first and second if conditions are true (15>10 and 15>5). Third is false (15>20). Output: A then B.',points:1 },
  { id:'pyc002',type:'code_output',difficulty:'easy',question:'What is the output?',code:'x = 7\nif x > 10:\n    print("big")\nelif x > 5:\n    print("medium")\nelse:\n    print("small")',options:['big','medium','small','big medium'],correct:1,explanation:'x=7 is not >10, but is >5. So elif executes: "medium".',points:1 },
  { id:'pyc003',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = 5\nresult = "even" if x % 2 == 0 else "odd"\nprint(result)',options:['even','odd','5','Error'],correct:1,explanation:'Ternary expression. 5%2=1≠0, so the condition is False, returns "odd".',points:1 },
  { id:'pyc004',type:'mcq',difficulty:'medium',question:'What does Python evaluate `not False or True and True` as?',options:['True','False','None','TypeError'],correct:0,explanation:'Precedence: not > and > or. not False = True. True and True = True. True or True = True.',points:2 },
  { id:'pyc005',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = 0\nif x:\n    print("Truthy")\nelse:\n    print("Falsy")',options:['Truthy','Falsy','0','Error'],correct:1,explanation:'0 is falsy in Python. if 0: is False, so else block runs.',points:1 },
  { id:'pyc006',type:'code_output',difficulty:'medium',question:'What is the output?',code:'score = 85\ngrade = "A" if score>=90 else "B" if score>=80 else "C"\nprint(grade)',options:['A','B','C','Error'],correct:1,explanation:'Chained ternary: score=85 is not >=90, so check next: 85>=80 is True → "B".',points:2 },
  { id:'pyc007',type:'mcq',difficulty:'easy',question:'Which is the correct syntax for an if statement in Python?',options:['if (x > 5) { print("yes") }','if x > 5: print("yes")','if x > 5 then print("yes")','if x > 5 → print("yes")'],correct:1,explanation:'Python uses colon : after condition. No parentheses required. No braces — indentation defines blocks.',points:1 },
  { id:'pyc008',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 5\nif x > 0:\n    if x > 10:\n        print("A")\n    else:\n        print("B")\nelse:\n    print("C")',options:['A','B','C','A B'],correct:1,explanation:'x=5>0 so outer if runs. x=5 is not >10 so inner else runs: "B".',points:1 },
  { id:'pyc009',type:'debug',difficulty:'medium',question:'Find the bug:\n```python\nx = 10\nif x > 5\n    print("big")\n```',options:['x should be a string','Missing colon after condition','print() needs two args','No bug'],correct:1,explanation:'Python requires a colon : after the if condition. Missing colon causes SyntaxError.',points:1 },
  { id:'pyc010',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = None\nif x is None:\n    print("empty")\nelif not x:\n    print("falsy")\nelse:\n    print("something")',options:['empty','falsy','something','empty falsy'],correct:0,explanation:'"is None" checks identity, not just falsiness. x is None is True, so "empty" prints. elif never reached.',points:2 },
  { id:'pyc011',type:'fill_blank',difficulty:'medium',question:'Write the FizzBuzz condition to print "FizzBuzz" when n is divisible by both 3 and 5:\n```python\nif n % 3 == 0 ___ n % 5 == 0:\n    print("FizzBuzz")\n```',answer:'and',explanation:'Both conditions must be true simultaneously, so use "and".',points:1 },
  { id:'pyc012',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = 10\ny = 20 if x > 5 else 0\nz = y or 100\nprint(z)',options:['0','20','100','10'],correct:1,explanation:'x=10>5 so y=20. y=20 is truthy, so "or" short-circuits and returns 20.',points:2 },
  { id:'pyc013',type:'mcq',difficulty:'hard',question:'What is the output of `print(1 < 2 < 3 < 4)`?',options:['True','False','TypeError','1'],correct:0,explanation:'Python supports chained comparisons. This evaluates as (1<2) and (2<3) and (3<4) = True and True and True = True.',points:2 },
  { id:'pyc014',type:'code_output',difficulty:'easy',question:'What is the output?',code:'age = 16\nif age >= 18:\n    print("Can vote")\nprint("Done")',options:['Can vote\nDone','Done','Can vote','Nothing'],correct:1,explanation:'age=16 is not >=18 so if block skipped. "Done" is outside the if block and always runs.',points:1 },
  { id:'pyc015',type:'mcq',difficulty:'medium',question:'Which statement about Python\'s `elif` is correct?',options:['Python has no elif, only else if','elif is short for "else if"','elif can only appear once','elif runs even if the if block ran'],correct:1,explanation:'"elif" stands for "else if". It checks a new condition only if all preceding if/elif conditions were False.',points:1 },
  { id:'pyc016',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 5\nprint("pos" if x>0 else "neg" if x<0 else "zero")',options:['pos','neg','zero','Error'],correct:0,explanation:'Nested ternary. x=5>0 is True → returns "pos".',points:2 },
  { id:'pyc017',type:'debug',difficulty:'hard',question:'What is wrong?\n```python\nif x > 0:\n    result = "positive"\nelif x < 0:\n    result = "negative"\nif x == 0:\n    result = "zero"\nprint(result)\n```',options:['No bug','Should use else not second if','elif is wrong','print is wrong'],correct:1,explanation:'The second "if" should be "else:" because it overwrites result for non-zero x unnecessarily. More importantly, if x=0, the first if/elif doesn\'t set result but the final print would reference it → NameError (if x!=0, works but second if runs again).',points:2 },
  { id:'pyc018',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = "hello"\nif x:\n    if len(x) > 3:\n        print("long")\n    print("string")\nprint("done")',options:['long\nstring\ndone','string\ndone','long\ndone','done'],correct:0,explanation:'x is truthy (non-empty). len("hello")=5>3 so "long" prints. "string" is at outer if level so prints too. "done" always.',points:2 },
  { id:'pyc019',type:'mcq',difficulty:'medium',question:'What is a "guard clause" pattern in Python?',options:['Using if at end of function','Early return to reduce nesting','Using assert statements','Type checking inputs'],correct:1,explanation:'Guard clauses check invalid conditions early and return/raise, reducing nesting and improving readability.',points:2 },
  { id:'pyc020',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def check(n):\n    return "big" if n>100 else "small"\nprint(check(50), check(200))',options:['big small','small big','small small','big big'],correct:1,explanation:'check(50): 50>100 False → "small". check(200): 200>100 True → "big".',points:2 },
  { id:'pyc021',type:'fill_blank',difficulty:'medium',question:'Complete the leap year check:\n```python\nis_leap = (year % 4 == 0 and year % 100 != 0) ___ (year % 400 == 0)\n```',answer:'or',explanation:'Leap year: (divisible by 4 AND NOT by 100) OR (divisible by 400).',points:2 },
  { id:'pyc022',type:'code_output',difficulty:'medium',question:'What is the output?',code:'x = []\nif x:\n    print("has items")\nelif x is not None:\n    print("exists but empty")\nelse:\n    print("is None")',options:['has items','exists but empty','is None','Error'],correct:1,explanation:'[] is falsy so if fails. [] is not None is True so elif runs: "exists but empty".',points:2 },
  { id:'pyc023',type:'mcq',difficulty:'easy',question:'In Python, what is the correct way to write "if a equals b"?',options:['if a = b:','if a == b:','if a === b:','if a equals b:'],correct:1,explanation:'== is the equality comparison operator. = is assignment, === is JavaScript syntax, "equals" is not valid Python.',points:1 },
  { id:'pyc024',type:'code_output',difficulty:'medium',question:'What is the output?',code:'n = 12\nif n % 2 == 0 and n % 3 == 0:\n    print("divisible by 6")\nelif n % 2 == 0:\n    print("divisible by 2")\nelif n % 3 == 0:\n    print("divisible by 3")',options:['divisible by 6','divisible by 2','divisible by 3','Nothing'],correct:0,explanation:'12%2=0 and 12%3=0, so first condition is True: "divisible by 6".',points:1 },
  { id:'pyc025',type:'mcq',difficulty:'hard',question:'What is the "match-case" statement equivalent to in older Python?',options:['if-elif-else chain','try-except','for loop','while loop'],correct:0,explanation:'match-case (Python 3.10+) is similar to if-elif-else chains or switch-case in other languages, but with pattern matching.',points:1 },
  { id:'pyc026',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 5\ny = x if x != 5 else x * 2\nprint(y)',options:['5','10','0','Error'],correct:1,explanation:'Ternary: condition x!=5 is False (x=5). So returns x*2 = 10.',points:2 },
  { id:'pyc027',type:'fill_blank',difficulty:'hard',question:'Complete using Python\'s walrus operator to check and print length:\n```python\ndata = [1,2,3,4,5]\nif ___ n := len(data)) > 3:\n    print(f"Long list: {n} items")\n```',answer:'(',explanation:'Walrus operator := assigns and returns value. Parentheses needed inside if/while.',points:2 },
  { id:'pyc028',type:'code_output',difficulty:'medium',question:'What is the output?',code:'msg = None\nresult = msg or "default"\nprint(result)',options:['None','default','Error','False'],correct:1,explanation:'"or" returns first truthy value. None is falsy, so "or" returns "default".',points:2 },
  { id:'pyc029',type:'debug',difficulty:'hard',question:'What is the bug?\n```python\ndef classify(n):\n    if n > 0:\n        return "positive"\n    elif n < 0:\n        return "negative"\n    elif n == 0:\n        return "zero"\nprint(classify(0))\n```',options:['No bug','Third elif should be else','Missing return','Indentation wrong'],correct:1,explanation:'No bug functionally, but the last elif n==0 should be "else:" since it\'s the only remaining case. elif with redundant check is bad practice.',points:2 },
  { id:'pyc030',type:'code_write',difficulty:'hard',question:'Write a function `grade_calculator(score)` that returns letter grade: A+ (>=97), A (>=93), A- (>=90), B+ (>=87), B (>=83), B- (>=80), C+ (>=77), C (>=73), C- (>=70), D (>=60), F (below 60).',answer_template:'def grade_calculator(score):\n    # Your code here\n    pass',test_cases:[{input:'grade_calculator(95)',expected:'A'},{input:'grade_calculator(75)',expected:'C+'},{input:'grade_calculator(50)',expected:'F'}],points:3 },
],

// ============================================================
// LOOPS — 30 Questions
// ============================================================
py_loops: [
  { id:'pyl001',type:'code_output',difficulty:'easy',question:'What is the output?',code:'for i in range(5):\n    print(i, end=" ")',options:['1 2 3 4 5','0 1 2 3 4','0 1 2 3 4 5','1 2 3 4'],correct:1,explanation:'range(5) generates 0,1,2,3,4. end=" " separates with space instead of newline.',points:1 },
  { id:'pyl002',type:'code_output',difficulty:'easy',question:'What is the output?',code:'for i in range(2, 8, 2):\n    print(i, end=" ")',options:['2 4 6 8','2 4 6','0 2 4 6','2 3 4 5 6 7'],correct:1,explanation:'range(2,8,2): start=2, stop=8 (exclusive), step=2. Generates: 2, 4, 6.',points:1 },
  { id:'pyl003',type:'mcq',difficulty:'easy',question:'What does `break` do in a loop?',options:['Skips the current iteration','Exits the entire loop immediately','Pauses the loop','Restarts the loop'],correct:1,explanation:'break exits the loop immediately, regardless of the loop condition.',points:1 },
  { id:'pyl004',type:'mcq',difficulty:'easy',question:'What does `continue` do in a loop?',options:['Exits the loop','Skips the rest of current iteration and goes to next','Restarts from beginning','Pauses the loop'],correct:1,explanation:'continue skips the remaining code in the current iteration and moves to the next iteration.',points:1 },
  { id:'pyl005',type:'code_output',difficulty:'medium',question:'What is the output?',code:'n = 3\nwhile n > 0:\n    print(n, end=" ")\n    n -= 1',options:['3 2 1','1 2 3','3 2 1 0','0 1 2 3'],correct:0,explanation:'n starts at 3. Loop prints n then decrements. 3 → 2 → 1, then n=0 so loop exits.',points:1 },
  { id:'pyl006',type:'code_output',difficulty:'medium',question:'What is the output?',code:'for i in range(5):\n    if i == 3:\n        break\n    print(i, end=" ")',options:['0 1 2 3 4','0 1 2','0 1 2 3','1 2 3'],correct:1,explanation:'Loop breaks when i==3. Prints 0, 1, 2 then breaks (3 is not printed).',points:1 },
  { id:'pyl007',type:'code_output',difficulty:'medium',question:'What is the output?',code:'for i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i, end=" ")',options:['0 2 4','1 3','0 1 2 3 4','2 4'],correct:1,explanation:'continue skips even numbers. Only odd numbers (1, 3) are printed.',points:1 },
  { id:'pyl008',type:'code_output',difficulty:'medium',question:'What is the output?',code:'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)',options:['15','14','16','10'],correct:0,explanation:'Sum of 1+2+3+4+5 = 15.',points:1 },
  { id:'pyl009',type:'code_output',difficulty:'medium',question:'What is the output?',code:'fruits = ["apple","banana","cherry"]\nfor i, fruit in enumerate(fruits, 1):\n    print(f"{i}:{fruit}", end=" ")',options:['0:apple 1:banana 2:cherry','1:apple 2:banana 3:cherry','apple banana cherry','1 2 3'],correct:1,explanation:'enumerate(fruits, 1) starts counting from 1. Produces (1,"apple"), (2,"banana"), (3,"cherry").',points:1 },
  { id:'pyl010',type:'code_output',difficulty:'medium',question:'What is the output?',code:'for i in range(3):\n    for j in range(3):\n        if i == j:\n            print(i, end=" ")',options:['0 1 2','0 0 1 1 2 2','1 2 3','0 1 2 0 1 2'],correct:0,explanation:'Nested loops. Diagonal elements (i==j): (0,0), (1,1), (2,2). Prints 0, 1, 2.',points:2 },
  { id:'pyl011',type:'code_output',difficulty:'medium',question:'What is the output?',code:'for i in range(3):\n    pass\nprint(i)',options:['0','2','3','Error'],correct:1,explanation:'Loop variable i persists after loop ends. After range(3), last value is 2.',points:2 },
  { id:'pyl012',type:'code_output',difficulty:'hard',question:'What is the output?',code:'for i in range(3):\n    print(i)\nelse:\n    print("done")',options:['0\n1\n2','0\n1\n2\ndone','done','Error'],correct:1,explanation:'For-else: the else block runs after the loop completes normally (without break). So prints 0,1,2 then "done".',points:2 },
  { id:'pyl013',type:'code_output',difficulty:'hard',question:'What is the output?',code:'for i in range(3):\n    if i == 1:\n        break\nelse:\n    print("done")',options:['done','Nothing','1','Error'],correct:1,explanation:'For-else: else block does NOT run if loop exits via break. Loop breaks at i=1, so "done" is NOT printed.',points:2 },
  { id:'pyl014',type:'mcq',difficulty:'easy',question:'How do you loop over a dictionary\'s key-value pairs?',options:['for k, v in dict:','for k, v in dict.items():','for dict.keys(), dict.values():','for k in dict.values():'],correct:1,explanation:'.items() returns (key, value) tuples. Unpack with "for k, v in d.items():".',points:1 },
  { id:'pyl015',type:'code_output',difficulty:'medium',question:'What is the output?',code:'names = ["A","B","C"]\nscores = [90, 85, 92]\nfor name, score in zip(names, scores):\n    print(name, end="")',options:['ABC','A B C','ABC 90 85 92','90 85 92'],correct:0,explanation:'zip() pairs elements. Loop unpacks each pair. Only names are printed: "A", "B", "C" → "ABC".',points:1 },
  { id:'pyl016',type:'code_output',difficulty:'hard',question:'What is the output?',code:'i = 0\nwhile i < 5:\n    i += 1\n    if i == 3:\n        continue\n    if i == 4:\n        break\nprint(i)',options:['3','4','5','6'],correct:1,explanation:'Loop: i=1,2,3(continue),4(break). Print i=4.',points:2 },
  { id:'pyl017',type:'fill_blank',difficulty:'medium',question:'Complete to generate list of even squares from 1-10:\n```python\nresult = [x**2 for x in range(1,11) ___ x%2==0]\n```',answer:'if',explanation:'List comprehension filter uses "if" at the end.',points:1 },
  { id:'pyl018',type:'code_output',difficulty:'easy',question:'What is the output?',code:'for char in "abc":\n    print(char.upper(), end="")',options:['abc','ABC','a b c','Error'],correct:1,explanation:'Iterating over a string gives each character. .upper() converts to uppercase.',points:1 },
  { id:'pyl019',type:'code_output',difficulty:'hard',question:'What is the output?',code:'result = []\nfor i in range(3):\n    for j in range(3):\n        result.append(i*j)\nprint(result[5])',options:['2','4','1','0'],correct:0,explanation:'Indices: (0,0)=0,(0,1)=0,(0,2)=0,(1,0)=0,(1,1)=1,(1,2)=2 → index 5 = 2.',points:2 },
  { id:'pyl020',type:'mcq',difficulty:'medium',question:'What is the most Pythonic way to iterate over a list with index?',options:['for i in range(len(lst))','for i, v in enumerate(lst):','for i = 0 to len(lst)','while i < len(lst)'],correct:1,explanation:'enumerate() is the Pythonic way. It provides both index and value without manual indexing.',points:1 },
  { id:'pyl021',type:'code_output',difficulty:'medium',question:'What is the output?',code:'data = [1, 2, 3, 4, 5]\nprint(sum(x*2 for x in data if x > 2))',options:['24','12','6','30'],correct:0,explanation:'Filter x>2: [3,4,5]. Multiply by 2: [6,8,10]. Sum: 24.',points:2 },
  { id:'pyl022',type:'code_output',difficulty:'hard',question:'What is the output?',code:'matrix = [[1,2],[3,4],[5,6]]\nflat = [x for row in matrix for x in row]\nprint(flat)',options:['[[1,2],[3,4],[5,6]]','[1,2,3,4,5,6]','[1,3,5,2,4,6]','Error'],correct:1,explanation:'Nested list comprehension flattens: outer loop over rows, inner over elements.',points:2 },
  { id:'pyl023',type:'mcq',difficulty:'hard',question:'What is the output of `list(range(5, 0, -2))`?',options:['[5,3,1]','[5,4,3,2,1]','[1,3,5]','[5,3]'],correct:0,explanation:'range(5,0,-2): start=5, stop=0 (exclusive), step=-2. Generates: 5,3,1.',points:2 },
  { id:'pyl024',type:'code_output',difficulty:'hard',question:'What is the output?',code:'count = 0\nfor i in range(10):\n    for j in range(i):\n        count += 1\nprint(count)',options:['45','55','25','10'],correct:0,explanation:'j ranges from 0 to i-1. Counts: 0+1+2+3+4+5+6+7+8+9 = 45.',points:2 },
  { id:'pyl025',type:'debug',difficulty:'medium',question:'Find the infinite loop bug:\n```python\ni = 0\nwhile i < 10:\n    print(i)\n    if i == 5:\n        break\n```',options:['No bug — it stops at 5','Missing i += 1 but break saves it','range should be used','while condition wrong'],correct:1,explanation:'Without i += 1, i stays 0 forever. But break at i==5 never triggers since i never reaches 5. INFINITE LOOP! Add i += 1.',points:2 },
  { id:'pyl026',type:'code_output',difficulty:'medium',question:'What is the output?',code:'words = ["hello","world","python"]\nlengths = list(map(len, words))\nprint(lengths)',options:['[5,5,6]','[hello,world,python]','[5,5,6,6]','Error'],correct:0,explanation:'map(len, words) applies len to each word: hello=5, world=5, python=6.',points:2 },
  { id:'pyl027',type:'code_output',difficulty:'hard',question:'What is the output?',code:'print(list(filter(lambda x: x%2, range(10))))',options:['[0,2,4,6,8]','[1,3,5,7,9]','[2,4,6,8]','[0,2,4,6,8,10]'],correct:1,explanation:'x%2 is truthy for odd numbers (returns 1). filter keeps elements where function returns truthy.',points:2 },
  { id:'pyl028',type:'fill_blank',difficulty:'easy',question:'Complete: Loop over list in REVERSE:\n```python\nfor x in ___([1,2,3,4,5]):\n    print(x)\n```',answer:'reversed',explanation:'reversed() returns an iterator that goes backwards.',points:1 },
  { id:'pyl029',type:'code_output',difficulty:'medium',question:'What is the output?',code:'total = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        total += i\nprint(total)',options:['55','30','25','20'],correct:1,explanation:'Sum of even numbers 1-10: 2+4+6+8+10 = 30.',points:1 },
  { id:'pyl030',type:'code_write',difficulty:'hard',question:'Write a function `find_prime(n)` that returns a list of all prime numbers up to n (inclusive) using the Sieve of Eratosthenes algorithm.',answer_template:'def find_prime(n):\n    # Implement Sieve of Eratosthenes\n    pass',test_cases:[{input:'find_prime(10)',expected:'[2, 3, 5, 7]'},{input:'find_prime(20)',expected:'[2, 3, 5, 7, 11, 13, 17, 19]'}],points:3 },
],

// ============================================================
// FUNCTIONS — 30 Questions
// ============================================================
py_functions: [
  { id:'pyf001',type:'code_output',difficulty:'easy',question:'What is the output?',code:'def greet(name):\n    return f"Hello, {name}!"\nprint(greet("Alice"))',options:['Hello, Alice!','greet("Alice")','Hello, name!','Error'],correct:0,explanation:'Function receives "Alice" as name parameter and returns formatted string.',points:1 },
  { id:'pyf002',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def add(a, b=10):\n    return a + b\nprint(add(5))\nprint(add(5, 20))',options:['15\n25','5\n25','15\n10','Error'],correct:0,explanation:'First call uses default b=10: 5+10=15. Second overrides b=20: 5+20=25.',points:1 },
  { id:'pyf003',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def show(*args):\n    print(type(args), len(args))\nshow(1,2,3)',options:["<class 'list'> 3","<class 'tuple'> 3","<class 'dict'> 3","Error"],correct:1,explanation:'*args collects positional arguments into a TUPLE. len((1,2,3))=3.',points:1 },
  { id:'pyf004',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def show(**kwargs):\n    print(type(kwargs))\nshow(a=1,b=2)',options:["<class 'tuple'>","<class 'list'>","<class 'dict'>","<class 'set'>"],correct:2,explanation:'**kwargs collects keyword arguments into a DICT.',points:1 },
  { id:'pyf005',type:'code_output',difficulty:'medium',question:'What is the output?',code:'square = lambda x: x**2\nprint(square(7))',options:['14','49','7','Error'],correct:1,explanation:'Lambda creates anonymous function. square(7) = 7**2 = 49.',points:1 },
  { id:'pyf006',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def factorial(n):\n    return 1 if n <= 1 else n * factorial(n-1)\nprint(factorial(5))',options:['5','25','120','Error'],correct:2,explanation:'Recursive factorial: 5*4*3*2*1 = 120.',points:1 },
  { id:'pyf007',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 10\ndef change():\n    x = 20\nchange()\nprint(x)',options:['10','20','None','Error'],correct:0,explanation:'x inside change() is a LOCAL variable. Modifying it doesn\'t affect the global x=10.',points:2 },
  { id:'pyf008',type:'code_output',difficulty:'hard',question:'What is the output?',code:'x = 10\ndef change():\n    global x\n    x = 20\nchange()\nprint(x)',options:['10','20','None','Error'],correct:1,explanation:'"global x" declares that x refers to the global variable. change() modifies the global x to 20.',points:2 },
  { id:'pyf009',type:'code_output',difficulty:'medium',question:'What is the output?',code:'nums = [5, 2, 8, 1, 9]\nsorted_nums = sorted(nums, key=lambda x: -x)\nprint(sorted_nums[0])',options:['1','5','9','Error'],correct:2,explanation:'key=lambda x: -x sorts in descending order. First element is largest: 9.',points:1 },
  { id:'pyf010',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def outer():\n    n = 10\n    def inner():\n        nonlocal n\n        n += 5\n    inner()\n    return n\nprint(outer())',options:['10','15','5','Error'],correct:1,explanation:'"nonlocal n" allows inner() to modify the enclosing scope\'s n. n starts at 10, becomes 15.',points:2 },
  { id:'pyf011',type:'mcq',difficulty:'hard',question:'What is the mutable default argument bug?',options:['A bug where mutable defaults are shared across all calls','A bug with lambda functions','A bug with *args','A bug with global variables'],correct:0,explanation:'def f(lst=[]): — the default list is created ONCE. All calls without argument share the same list object!',points:2 },
  { id:'pyf012',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def f(a, b=[]):\n    b.append(a)\n    return b\nprint(f(1))\nprint(f(2))',options:['[1]\n[2]','[1]\n[1, 2]','[1, 2]\n[1, 2]','Error'],correct:1,explanation:'Mutable default arg bug! b=[] is created ONCE. First call: b=[1]. Second call: same b=[1], append 2 → [1,2].',points:2 },
  { id:'pyf013',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def f(x, *, y):\n    return x + y\nprint(f(1, y=2))',options:['3','12','Error','None'],correct:0,explanation:'* forces y to be keyword-only. f(1, y=2) passes x=1, y=2 → returns 3.',points:2 },
  { id:'pyf014',type:'fill_blank',difficulty:'medium',question:'Complete to write a function that returns both min and max:\n```python\ndef min_max(lst):\n    return ___(lst), ___(lst)\n```',answer:'min',explanation:'Python\'s built-in min() and max() functions return the smallest/largest element.',points:1 },
  { id:'pyf015',type:'code_output',difficulty:'easy',question:'What is the output?',code:'def f():\n    pass\nprint(f())',options:['None','0','""','Error'],correct:0,explanation:'A function with no return statement (or just pass) returns None implicitly.',points:1 },
  { id:'pyf016',type:'code_output',difficulty:'medium',question:'What is the output?',code:'nums = [1, 2, 3, 4, 5]\nresult = list(map(lambda x: x**2, filter(lambda x: x%2==1, nums)))\nprint(result)',options:['[1,4,9,16,25]','[1,9,25]','[4,16]','[2,4,6,8,10]'],correct:1,explanation:'filter(odd): [1,3,5]. map(square): [1,9,25].',points:2 },
  { id:'pyf017',type:'code_output',difficulty:'hard',question:'What is the output?',code:'from functools import reduce\nresult = reduce(lambda a,b: a*b, range(1,6))\nprint(result)',options:['15','120','720','Error'],correct:1,explanation:'reduce applies lambda cumulatively: 1*2=2, 2*3=6, 6*4=24, 24*5=120.',points:2 },
  { id:'pyf018',type:'mcq',difficulty:'medium',question:'What is the correct LEGB order for variable lookup?',options:['Global→Local→Enclosing→Built-in','Local→Enclosing→Global→Built-in','Built-in→Global→Enclosing→Local','Local→Global→Enclosing→Built-in'],correct:1,explanation:'LEGB: Local scope first, then Enclosing (closures), then Global, then Built-in (like len, print).',points:2 },
  { id:'pyf019',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def make_counter():\n    count = 0\n    def counter():\n        nonlocal count\n        count += 1\n        return count\n    return counter\nc = make_counter()\nprint(c(), c(), c())',options:['1 1 1','0 1 2','1 2 3','Error'],correct:2,explanation:'Closure! Each call to c() increments the enclosed count. Returns 1, 2, 3.',points:2 },
  { id:'pyf020',type:'fill_blank',difficulty:'easy',question:'Complete the lambda to square a number:\n```python\nsquare = lambda ___: x**2\n```',answer:'x',explanation:'Lambda syntax: lambda parameter: expression.',points:1 },
  { id:'pyf021',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def f(*args, **kwargs):\n    return len(args) + len(kwargs)\nprint(f(1,2,3,a=4,b=5))',options:['5','2','3','Error'],correct:0,explanation:'args=(1,2,3) len=3. kwargs={a:4,b:5} len=2. 3+2=5.',points:2 },
  { id:'pyf022',type:'mcq',difficulty:'hard',question:'What happens when you call a generator function?',options:['Runs the function and returns result','Returns a generator object without running any code','Raises TypeError','Runs until first yield'],correct:1,explanation:'Calling a generator function returns a generator object. No code inside runs until you call next() on it.',points:2 },
  { id:'pyf023',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\nprint(fib(7))',options:['13','21','8','34'],correct:0,explanation:'Fibonacci: fib(7) = fib(6)+fib(5) = 8+5 = 13.',points:2 },
  { id:'pyf024',type:'debug',difficulty:'hard',question:'What is the bug?\n```python\ndef power(base, exp):\n    if exp = 0:\n        return 1\n    return base * power(base, exp-1)\n```',options:['Missing return in base case','= should be ==','exp should be exp-1 first','No bug'],correct:1,explanation:'= is assignment, not comparison. The base case should use == : if exp == 0:',points:2 },
  { id:'pyf025',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def f(x):\n    return lambda y: x + y\nadd5 = f(5)\nprint(add5(3))',options:['8','15','53','Error'],correct:0,explanation:'f(5) returns a lambda that adds 5 to y. add5 = lambda y: 5+y. add5(3) = 8.',points:2 },
  { id:'pyf026',type:'mcq',difficulty:'medium',question:'What does `@property` decorator do?',options:['Makes function private','Allows method to be called without ()','Makes function a class method','Caches function result'],correct:1,explanation:'@property converts a method into a read-only attribute. Access as obj.name instead of obj.name().',points:2 },
  { id:'pyf027',type:'code_output',difficulty:'medium',question:'What is the output?',code:'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\nprint(greet("Bob", greeting="Hi"))',options:['Hello, Bob!','Hi, Bob!','Bob, Hi!','Error'],correct:1,explanation:'keyword argument "greeting=\'Hi\'" overrides the default "Hello".',points:1 },
  { id:'pyf028',type:'code_output',difficulty:'hard',question:'What is the output?',code:'def f():\n    for i in range(3):\n        yield i*2\nprint(list(f()))',options:['[0,1,2]','[0,2,4]','0 2 4','Error'],correct:1,explanation:'Generator yields 0*2=0, 1*2=2, 2*2=4. list() collects all: [0,2,4].',points:2 },
  { id:'pyf029',type:'fill_blank',difficulty:'medium',question:'Complete to use functools for memoization:\n```python\nfrom functools import ___\n@lru_cache(maxsize=None)\ndef fib(n):\n    return n if n<=1 else fib(n-1)+fib(n-2)\n```',answer:'lru_cache',explanation:'lru_cache caches function results. Perfect for recursive functions like fib.',points:2 },
  { id:'pyf030',type:'code_write',difficulty:'hard',question:'Write a function `binary_search(arr, target)` that returns the index of target in sorted array arr, or -1 if not found. Use iterative approach with O(log n) time complexity.',answer_template:'def binary_search(arr, target):\n    # Iterative binary search\n    pass',test_cases:[{input:'binary_search([1,3,5,7,9,11],7)',expected:'3'},{input:'binary_search([1,3,5,7,9,11],4)',expected:'-1'}],points:3 },
],

// Add stubs for remaining topics (will have 20 questions each)
py_strings: generateStubQuestions('py_strings', 'Strings', 20),
py_lists:   generateStubQuestions('py_lists',   'Lists',   20),
py_tuples:  generateStubQuestions('py_tuples',  'Tuples',  20),
py_dicts:   generateStubQuestions('py_dicts',   'Dicts',   20),
py_sets:    generateStubQuestions('py_sets',    'Sets',    20),
py_files:   generateStubQuestions('py_files',   'Files',   20),
py_exceptions: generateStubQuestions('py_exceptions','Exceptions',20),
py_oop:     generateStubQuestions('py_oop',     'OOP',     20),
py_modules: generateStubQuestions('py_modules', 'Modules', 20),
py_iterators:  generateStubQuestions('py_iterators','Iterators',20),
py_decorators: generateStubQuestions('py_decorators','Decorators',20),
py_comprehensions: generateStubQuestions('py_comprehensions','Comprehensions',20),
py_regex:   generateStubQuestions('py_regex',   'RegEx',   20),
py_advanced:generateStubQuestions('py_advanced','Advanced Python',20),
py_stdlib:  generateStubQuestions('py_stdlib',  'Std Library',20),

// DSA questions
dsa_complexity:    generateStubQuestions('dsa_complexity',    'Big O',         20, 'dsa'),
dsa_arrays:        generateStubQuestions('dsa_arrays',        'Arrays',        20, 'dsa'),
dsa_linked_list:   generateStubQuestions('dsa_linked_list',   'Linked List',   20, 'dsa'),
dsa_stacks:        generateStubQuestions('dsa_stacks',        'Stacks',        20, 'dsa'),
dsa_hashing:       generateStubQuestions('dsa_hashing',       'Hashing',       20, 'dsa'),
dsa_recursion:     generateStubQuestions('dsa_recursion',     'Recursion',     20, 'dsa'),
dsa_sorting:       generateStubQuestions('dsa_sorting',       'Sorting',       20, 'dsa'),
dsa_binary_search: generateStubQuestions('dsa_binary_search', 'Binary Search', 20, 'dsa'),
dsa_trees:         generateStubQuestions('dsa_trees',         'Trees',         20, 'dsa'),
dsa_heap:          generateStubQuestions('dsa_heap',          'Heaps',         20, 'dsa'),
dsa_graphs:        generateStubQuestions('dsa_graphs',        'Graphs',        20, 'dsa'),
dsa_dp:            generateStubQuestions('dsa_dp',            'DP',            20, 'dsa'),
dsa_greedy:        generateStubQuestions('dsa_greedy',        'Greedy',        20, 'dsa'),
dsa_divide_conquer:generateStubQuestions('dsa_divide_conquer','D&C',           20, 'dsa'),
dsa_trie:          generateStubQuestions('dsa_trie',          'Trie',          20, 'dsa'),
dsa_advanced_graphs:generateStubQuestions('dsa_advanced_graphs','Adv. Graphs', 20, 'dsa'),
dsa_segment_tree:  generateStubQuestions('dsa_segment_tree',  'Segment Tree',  20, 'dsa'),
};

// ============================================================
// Stub question generator (for topics not yet fully written)
// These are placeholder MCQs — expandable
// ============================================================
function generateStubQuestions(topicId, topicName, count, type='python') {
  const questions = [];
  const templates = {
    py_strings: [
      { q:'What does `"hello".upper()` return?', opts:['Hello','HELLO','hello','hELLO'], c:1, ex:'upper() converts all chars to uppercase.' },
      { q:'What does `"hello world".split()` return?', opts:["['hello','world']","('hello','world')","'hello' 'world'",'Error'], c:0, ex:'split() with no args splits on whitespace, returns list.' },
      { q:'What does `"   hello   ".strip()` return?', opts:['"   hello   "','"hello"','"   hello"','"hello   "'], c:1, ex:'strip() removes leading and trailing whitespace.' },
      { q:'What is `"abc"[1:]`?', opts:['"a"','"bc"','"abc"','"ab"'], c:1, ex:'Slicing [1:] returns from index 1 to end.' },
      { q:'What does `"a,b,c".split(",")` return?', opts:["['a','b','c']","['a,b,c']","'a' 'b' 'c'",'Error'], c:0, ex:'split(",") splits on commas.' },
      { q:'Strings in Python are:', opts:['Mutable','Immutable','Both','Neither'], c:1, ex:'Strings cannot be modified in-place. s[0]="X" raises TypeError.' },
      { q:'What does `"hello".find("ll")` return?', opts:['1','2','3','0'], c:1, ex:'find() returns the starting index of substring. "ll" starts at index 2.' },
      { q:'What is `len("Python")`?', opts:['5','6','7','Error'], c:1, ex:'"Python" has 6 characters.' },
      { q:'What does `"abc" * 3` give?', opts:['"abc3"','"abcabcabc"','"3abc"','Error'], c:1, ex:'String * int repeats the string 3 times.' },
      { q:'What is `"Hello World".lower()`?', opts:['"Hello world"','"hello world"','"hello World"','"HELLO WORLD"'], c:1, ex:'lower() converts all to lowercase.' },
    ],
    default: [
      { q:`What is a key concept in ${topicName}?`, opts:['Option A','Option B','Option C','Option D'], c:0, ex:`Key concept explanation for ${topicName}.` },
      { q:`Which statement about ${topicName} is correct?`, opts:['A is correct','B is correct','C is correct','D is correct'], c:1, ex:`Statement B is correct for ${topicName}.` },
    ]
  };

  const tpls = templates[topicId] || templates.default;
  for (let i = 0; i < count; i++) {
    const tpl = tpls[i % tpls.length];
    const difficulty = i < 8 ? 'easy' : i < 16 ? 'medium' : 'hard';
    questions.push({
      id: `${topicId}_q${String(i+1).padStart(3,'0')}`,
      type: 'mcq',
      difficulty,
      question: tpl.q + (i >= tpls.length ? ` (Variation ${Math.floor(i/tpls.length)+1})` : ''),
      options: tpl.opts,
      correct: tpl.c,
      explanation: tpl.ex,
      points: difficulty === 'hard' ? 2 : 1
    });
  }
  return questions;
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================
window.getQuestionsForTopic = function(topicId) {
  return window.QUESTION_BANK[topicId] || [];
};

window.getQuestionCount = function(topicId) {
  return (window.QUESTION_BANK[topicId] || []).length;
};

window.shuffleQuestions = function(topicId, limit = null) {
  const qs = [...(window.QUESTION_BANK[topicId] || [])];
  // Fisher-Yates shuffle
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }
  return limit ? qs.slice(0, limit) : qs;
};
