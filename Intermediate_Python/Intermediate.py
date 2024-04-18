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
contact = {
    "name": "John",
    "number": 6496426
}
print(contact["number"])
print(contact.get("name"))
print(contact.keys())
print(contact.values())
print(contact.items())