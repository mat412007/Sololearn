# PYTHON
# Python is one of the most popular and useful languages used to give instructions to computers
# Python has a simple syntax, it's easy to read, write and learn
# The code in computer programs is made of statements, instructions for the computer to follow 
# 1---------------------
# The print() instruction is the easiest way to display a value on the screen or any other display device
# It requires parenthesis  and quotation marks around text messages, but not for numbers
print("Hello World")
print(10)
# 2-------------------
# Computer programs use variables to store and remember important information to use later
# To create it you give it a name and a value, both separated by the equal sign
# You can think of a variable as a box that contains information
# Always give the variables descriptive names, so you know what they have stored
# Variables are key for software development, they allow you to store, lbael and play with data
# You can access the value a variable is storing by calling it's name
# You can update the value of a variable and the variable will forget the previous value, this is called reassigning
name = "Marco"
print(name)
name = "Diego"
# 3-----------------
# A piece of text is called a string
# Strings need to be surrounded by quotation marks
# Both single '' and double "" quotes can be used to define strings, but the marks need to match
string = "Text surrounded by quotation marks"
# 4-----------------
# Numerical data is information that comes in the form of numbers
# Numbers are not surrounded by quotation marks
number = 100
print(50)
# You can also perform math operations with numbers
# You can store the result of a calculation inside a variable
# You can also make calculations using values inside variables
Suma = 10 + 5
Resta = 10 - 5
Multiplicacion = 10 * 5 
Division = 10 / 5
print(Suma + 10)
print(Suma + Resta)
# 5----------------
# Coding consists of 3 steps: writting, executing, debuging
# Machines will not follow instructions if the contain mistakes
# This mistakes in the code are called bugs
# The computer reads and executes instructions from top to bottom, but it stops as soon as it finds a bug
# 6----------------
# Computer programs must have universal standars and practices for collaboration
# - Professional developers use comments to add explanations to their programs, using the hash symbol #, their content is not read by the computer
# - Python is a case-sensitive language, meaning that 'A' and 'a' are treated as different
# - Snake case is a popular way to create variable names using underscores _ to separate words in the variable name
# - A variable name can contain numbers, but can't start with a number
# 7-----------------
# Computer programs are designed to interact with the user and the outside world
# An input is any information that goes into the computer, like clicking a button
# The input() instruction is the easiest way to allow the user to insert a value into your program
message = input()
# An output is a way for the computer to communicate with the outside world, like a message displayed on the screen
print(message)
# Computer programs can have multiple inputs and outputs
# 8-----------------
# Computers treat different types of data in many different ways
# The main data types are strings and numbers
# - Strings are pieces of text
# - There also are different types of numbers:
#   - Integers: whole numbers without a decimal point
#   - Float: numbers with decimal places
String = "Text"
Integer = 10
Float = 7.50
# The way computers operate with values depends on the data type
# Whe you use the + addition sign on strings, they are joined together, they concatenate
# The division of two integers always produces a float
# Any math operation between an integer and a float always produces a float
print("Iron" + "Man")
# 9-------------------
# Sometimes, the data you are using can have the wrong type
# The type() instruction can check the type of data of the value you insert in it
numeric = 10
t = type(numeric)
if t == int:
    print("Number")
# The input() always takes a string from the user, no matter what
# The int() instruction converts any type of value into an integer
# The float() instruction converts any type of value into a float
# The str() instruction converts any type of value into a string
number = float(input())
print(int(number))
print(str(number))
# 10--------------------
# Comparison operations is a type of operation that makes machines make decisions
# This operations always result in either True of False
# True of False represent a data type called Boolean
# < (less than)
# > (more than)
# <= (same of less than)
# >= (same of more than)
# == (same)
# != (different)
print(0 < 10)
# Logical operations are needed for machines to evaluate complex scenarios
# Comparison operations produce a Boolean value, logical operations take multiple Boolean values and produce a single one out of them
# - The "and" operation is True when all the valuea are
# - The "or" operation is True when any of the values is
print(True or False)
# You can also store Boolean values in a variable
boolean = True
# You can also combine comparison and logical operations
print((5 < 4) or True)
# 11---------------------
#  An algorithm is a set of step-by-step instructions to complete a task, placed in a certain order, they can be represented as:
# - Flowcharts: help visualize the flow of the algorithm
# - Pseudocode: a simplified language that is a bit closer to programming language
# - Natural language
# 12----------------------
# You control the flow of instructions a computer follows, using 3 techniques: sequencing, iteration and selection
# Sequencing:
#   It means that the computer runs your code in order, from top to bottom
# Iteration:  
#   Is about executing an instruction repeatedly, represented as a loop, it helps you make your code simpler
#   A for loop is used to execute the same instruction over and over again, a specific number of times
#   The code that gets repeated in any loop must be indented. Indentation is the spaces at the beginning of lines
for i in range(3):
  print(i)
#   While loops are powerful because they can be used even when you don’t know how many iterations will be needed
#   While loops repeat code while the condition holds true
#   If you don't change the counter variable after every loop, it creates an infinite loop 
seats = 300
while seats > 0:
  print("Sell ticket")
  seats = seats - 1
#   In general, use for loops when you already know the number of iterations, and while loops when there is a condition that needs to be met
# Selection:
#   Specifies when to follow each possible path and wich to follow
#   if-else statements, allow programs to perform different actions based on the conditions
age = 22
if age < 18: 
  print("Junior discount")
elif age >= 75: 
  print("Senior discount")
else:
  print("No discount")
# 13-------------------------
# Lists allow you to store a collection of multiple values in a single variable
# Lists can contain any data type
# You can access an item in a list using its position or index number
# Lists are mutable. This means you can change their values even after they've been created
cart = [
    "milk", 
    "eggs", 
    "apples"
]
cart[0] = "banana"
print(cart[0])
# Indexing also works with strings. You can use indexing to access individual characters in a string
# Strings are immutable, which means that you can’t change the characters in a string
animal = "Dog"
print(animal[0])
# Both lists and strings are Python sequences. Which means that their content is ordered
# Slicing allows you to extract a portion of a sequence. Starting and stopping indexes are separated by a colon :
animals = [
  "cat",
  "dog",
  "bird",
  "hamster"
]
print(animals[1:3]) # dog, bird
# You can omit the starting or stopping index to slice from or until that element
print(animals[:2]) # cat, dog
print(animals[1:]) # dog, bird, hamster
# Python supports "indexing from the end", called negative indexing. This means the last value of a sequence has an index of -1
print(animals[-1]) # hamster
print(animals[-3:-1]) # dog, bird
print(animals[1:-1]) # dog, bird
animals[:2] = "Hawk", "Eagle"
# 14--------------------
# Functions are reusable blocks of code for specific tasks. They help keep your code as short and easy to work with as possible, saving you from repeating code
# A function contains the code to perform a task. To use this code, you just need to call the function. Example: print(), type(), input(), these are built-in functions
# Functions require information to be passed in order for the task to be completed. We pass information into functions as arguments. A function can take multiple arguments
# Functions can take operations as arguments
print("I am", 17, "years old") # auto-spaced
print("Wake" + "board")
# String functions will enhance your productivity when working with text
# Functions that only work on certain objects (strings, lists, etc.) are called using dot . notation
# - .upper() = change the case of a string to all in uppercase 
# - .lower() = change the case of a string to all in lowercase
# - .capitalize() = converts the first character of a string to uppercase, while making the remaining characters lowercase
# - .find() = returns the index position of a character (or a pattern of characters) if it is present in a string. It will return -1 if the value can't be found in the string
print("SmartPhone".lower())
print("SmartPhone".upper())
print("SmartPhone".capitalize())
print("Apple".find("p"))
# List functions
# - len() = stands for length, it return the number of items on a list