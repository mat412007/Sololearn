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
# 10--------------------
