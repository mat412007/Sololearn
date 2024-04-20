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
