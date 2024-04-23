# PYTHON
# 1-------------------------------
# In Python, besides lists and strings, there are other types of collections used for various tasks
# Tuples, like lists, are ordered collections of items created with parentheses
# The items in tuples also have their indexes, starting from 0. You can access the items in tuples just like you do with lists
# Tuples are immutable.They are useful when the data stored in collections shouldn't be accidentally modified during the program execution
# You can use the count() function to calculate the number of occurrences of an item in a tuple
# Many functions used with lists can also be used with tuples, as long as their purpose doesn't include modifying them.
# The max() and the min() functions return the maximum and minimum value in a collection.
# You can use tuples in any control flow structures, such as if-else statements and loops, just as you would with lists
# Tuple unpacking allows for assigning tuple items to variables. The values will be assigned in the order they appear in the tuple
# The * operator in tuple unpacking is used to gather multiple elements from the tuple into a list. This is useful when dealing with tuples of unknown length
coordinates = (48.8584, 2.2945)
x, y = coordinates
print(coordinates[0])
print(len(coordinates))
print(max(coordinates))
points = (4, 45, 87, 2, 46, 54, 12, 9)
four, Forty_Five, *rest = points
for point in points:
    print(point)
# 2----------------------------------
# Sets are a collection type that is perfect for collecting unique data
# Sets, unlike lists and tuples, are unordered collections. They are created with curly brackets { }
# Sets are unordered and don't support indexing or slicing
# Sets can't have duplicates, which is very helpful when developers need to ensure that each item in a collection is unique. Adding duplicate items to a set doesn't cause an error; instead, it's ignored
# Sets are mutable, meaning you can add or remove items from them.Use the add() and remove() functions, each with a value as an argument, to add or remove it from a set
# The clear() function doesn't accept an argument and removes all the items from a set
# The union() function called returns a new set with all elements from both sets, omitting duplicates
# The difference() function returns a set containing elements that are only in the first set and not in the second
guests = {"Mery", "Anna", "Jonathan"}
guests2 = {"Gary", "Diego", "Fran"}
guests.add("Marco")
guests.remove("Mery")
combined = guests.union(guests2)
combined = guests.difference(guests2)
guests.clear()
# 3--------------------------------
# Key-value pairs are a fundamental concept in programming, allowing for efficient organization and retrieval of data
# Dictionaries are collection types used to store data in key:value pairs, which are considered as items. They are ideal for organizing data into pairs, where each piece of data (value) has its unique identifier (key)
# Dictionaries are created using curly brackets { }.
# Items are separated by commas, and keys and values are separated by a colon
# While strings are the most commonly used data type for keys, other immutable types can also serve as keys. Values can be of any data type
# Dictionaries can have duplicate values, but not duplicate keys. Values with duplicate keys will overwrite existing values
# To access values in dictionaries, you need to use the keys
# Another way to access values in a dictionary is through the get() function.It's called on a dictionary using dot . notation and accepts the key as an argument
# You can get all the values and keys of a dictionary using the values() and keys() functions, respectively
# The items() function returns all the key:value pairs in a dictionary
# You can add a new item by providing a new key and assigning a value to it
# The update() function updates the dictionary with the items from the given argument, a dictionary, if an item is new, it will be added to the original dictionary
# The pop() function removes the item with the specified key name
# You can use the in operator to check if a key or a value occurs in a dictionary, to check if a value occurs in a dictionary, you need to use the values() function
# You can iterate through a dictionary using a for loop. If you loop through a dictionary, it will return the keys. Use the values() function to iterate through the car dictionary's values
contact = {
    "name": "John",
    "number": 6496426
}
contact["age"] = 17
contact.update({"age":20, "DNI": 45789634})
print(contact["number"])
print(contact.get("name"))
print(contact.keys())
print(contact.values())
contact.pop("DNI")
print(contact.items())
print("name" in contact)
print("John" in contact.values())
for i in contact:
    print(i)
for h in contact.values():
    print(h)
for key, value in contact.items():
    print(key, ":", value)
# 4--------------------------------------
# Creating lists from scratch can sometimes be time-consuming, requiring you to manually write all the items or iterate through them with a loop
# List comprehensions are useful shorthands for such operations. They offer a shorter and more readable way to create lists with various settings using just a single line of code
# - <variable>: the variable that will store the new list
# - <expression>: an expression performed on each item. If no specific action is needed, the item itself is used
# - <item>: the current item being processed
# - <iterable>: any iterable object, such as ranges, lists, strings, tuples, and sets
# You can use a list as the iterable in a list comprehension
# You can incorporate a condition into a list comprehension, placed after the iterable
tags = ["travel", "vacation", "enjoy"]
capitalized = [x.capitalize() for x in tags]
hashtags = ["#" + x for x in tags]
nums = [x for x in range(1,51)]
nums2 = [x*2 for x in range(1,11)]
pairs = [x for x in range(51) if x % 2 == 0]
# 5--------------------------------
# In programming, bugs and errors are common, regardless of experience level. They can range from minor typos to complex logical errors
# The computer reads and executes instructions line by line, from top to bottom. The execution of the program will be interrupted at the first error encountered
# Mistakes in Python can be broadly categorized into two types: bugs and exceptions
# - Bugs are flaws or mistakes in a program's code, leading to incorrect or unintended behavior. This doesn't necessarily stop the program from running to completion, but it can result in wrong outputs or behaviors. Bugs, often caused by logical errors, can lead to unexpected or incorrect results
# - Exceptions are another category of mistakes in programming. These are specific errors that occur during a program's execution and interrupt its normal flow when first encountered
# There are several types of exceptions in Python
NameError #  is raised when an unknown variable is used
SyntaxError #  is raised when a syntax mistake in the code is encountered. This could be due to various reasons such as missing punctuation (like commas, parentheses or colons)
IndexError # is raised when you attempt to access an element of an iterable, ordered collection, such as lists and tuples, using an index that is outside its valid range
TypeError #  is raised when a function is called on a value of an inappropriate type. For example, the len() function can be called only on iterables (like strings, lists, etc.)
ValueError #  is raised when a function receives a value of the correct type, but the value itself is inappropriate or unacceptable. For example, the int() function can be called on strings, but only when all characters in the string are numerical values
# 6-----------------------------------
# Exceptions often arise from a variety of causes, including invalid input, out-of-bounds indices, incompatible type operations, and logical errors in the code. The good news is that exceptions are often predictable, allowing developers to anticipate and handle them effectively
# Exceptions can often be predictable. To handle them and prevent program failure, you can use a try/except statement.
# The try block holds code that might cause an exception. If an exception occurs, execution of the try block stops, and the except block is executed, allowing the program to continue running.
# To handle a specific type of exception, you need to specify it in the except block
# When you specify only one type of exception to be handled, other types of exceptions will not be covered. If these other exceptions occur, the program execution will fail
# You can have multiple except blocks to handle each possible exception specifically. As a best practice, it is recommended to output a definitive message for each type of handled exception
# You can choose not to specify the exception type, which allows handling of any exceptions that may occur. While this approach is easier, the downside is that the error messages may not be as clear and helpful
# Exceptions are very helpful when your program interacts with user input
# You can use the finally statement to perform an operation after the try/except block, no matter if an exception occurred or not
# The else statement can be used in conjunction with the try/except block and will execute only when no error occurs in the try block
# You can trigger your own exceptions based on specific conditions using the raise statement. This will immediately stop the program's execution and indicate an error has occurred. Custom exceptions are really helpful when it comes to handling logical issues that can't be caught by the computer
prices = [540, 500, 1000, "985", 475]
try:
    total = sum(prices)
    print(total)
except:
    print("Error")

color = "Green"
try:
    print(color)
except NameError:
    print("Check the variable name")
except SyntaxError:
    print("Check the syntax")
else: 
    print("You chose the " + color + " color")
finally:
    print("Need help? Contact us")
    
print("Rate from 0 to 10")
rate = 15
if rate < 0 or rate > 10:
    raise ValueError("Invalid Range")
# 7----------------------------------------
# Functional Programming is a paradigm that leverages functions to their fullest potential to write cleaner and more efficient code
# You can assign a function to a variable and then use it to call the function
# Functions can take other functions as arguments, these are called Higher-Order Functions. They are particularly useful for processing various functions and returning specific results
# An important concept in Functional Programming is Pure Functions. A function is called pure if it gives the same result every time you give it the same inputs, and it doesn't affect anything outside of the function. This makes them trustworthy and simpler to understand
# The function is impure if it depends on any external state that it modifies or that affects its output. This includes changing variables, or altering input arguments. Such dependencies make the function's behavior unpredictable and dependent on the context in which it's run
def order(plate):
    return "Your order: " + plate
def process_order(dish, func):
    return func(dish)
delivery = process_order # no need for parenthesis ()
print(delivery("Spaghetti", order))
def total(price, count): # Pure Function
    return price * count
def hashtag(): # Impure function
  word = input()
  return '#' + word
# 8------------------------------------
# Lambda Expressions are an efficient feature in Python, allowing you to create compact, throwaway functions without needing the formal structure of a standard function definition
# Lambda expressions are functions without a name that are quick to create and use. They are written in just one line using the lambda keyword, and are often used for small, simple tasks
# Lambda expressions are called anonymous functions. This means that they don't need a name while being defined
# Lambda expressions perform a single operation and return a result. They are defined using the lambda keyword, followed by its arguments, a colon, and the expression to perform
# Lambda expressions can take multiple arguments separated by commas
# You can provide arguments to lambda expressions on-the-fly by adding them in parentheses immediately after the lambda function. The lambda expression should be also enclosed in parentheses
def mult(n):
    return lambda a: a * n, n
double, n1 = mult(2)
triple, n2 = mult(3)
print(double(5)) # 10
print(triple(5)) # 15
print(n1) # 2
print(n2) # 3
greet = lambda name: "Welcome " + name
print(greet("Bob"))
size = lambda width, height: width * height
print(size(2, 10))
sum = (lambda x, y: x + y) (5, 7)
print(sum)
# 9-----------------------------------
# Lambda expressions can be used with functions that are specifically designed for processing and transforming iterables
# The map() function applies a specified function to every element in an iterable, like lists or tuples. It produces a result that can be transformed into a list using the list() function for easy viewing or further use.
# The map function requires the first argument to be a function and the second argument to be an iterable, always in that order
# Another valuable aspect of the lambda expressions is their ability to be directly provided to the map function. This eliminates the need to define a regular function explicitly
# The filter() function is particularly useful for extracting subsets of data that meet certain criteria, and you also have to use the list() function afterwards
def capitalize(name):
    return name.capitalize()
names = ["james", "nicolas", "johnny", "max", "marco"]
capitalized = map(capitalize, names)
capitalized = list(capitalized)
print(capitalized)

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x*2, numbers))
print(doubled)

names = ["John", "Emma", "Jake", "Rachel", "James"]
filtered = list(filter(lambda name: name[0] == 'J', names))
# 10------------------------------------
# You can modify functions to make them more versatile and prepare them for every possible scenario
# If the number of arguments of your function is unknown and unpredictable, you can always use an iterable as an argument
# *args allows you to provide any number of arguments without the need to create a list before calling the function each time
# *args receives arguments as a tuple, which can be used inside the function
# You need to use the unpacking operator * before args. This operator informs Python that the argument is an iterable and should be unpacked to receive its values as individual arguments
# Note that args is just a name. You’re not required to use the name args. You can choose any name that you prefer
# When defining a function with both regular arguments and *args, the regular arguments must come before *args in the function definition
# The first line of the function definition, which includes the function name and its parameters, is called function signature
# Python also allows you to pass keyword arguments using **kwargs. In this case, **kwargs receives arguments in the form of a dictionary, consisting of key:value pairs
# The ** operator in Python is used to unpack dictionaries into arguments. It enables a function to accept an arbitrary number of keyword arguments, converting these arguments into a dictionary of key:value pairs
# In a function definition, the order of arguments is important. First, regular arguments are listed, followed by *args for positional arguments, and finally **kwargs for keyword arguments
def total(*args):
    result = 0
    for arg in args:
        result += arg
    return result
print(total(5, 7, 6, 2, 4))

def show_items(category, *items):
    print("Category: " + category)
    for item in items:
        print(item)
show_items("Electronics", "Laptop", "Smartphone", "Tablet")

def display_info(**kwargs):
    for key, value in kwargs.items():
        print(key, ":", value)
display_info(name="Marco", age="17", city="CABA")
# 11--------------------------------------
# 