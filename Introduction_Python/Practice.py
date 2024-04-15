# 1 - print()
# 2 - Variables
# 3 - Strings
# 4 - Numbers and Math operations(+, -, *, /, %)
# 5 - Steps of coding
# 6 - Standars and best practices
# 7 - input()
# 8 - Data types and concatenation(strings, integers, floats, booleans)
# 9 - Changing and checking data types(type(), int(), float(), str())
# 10 - Comparison operations(<, >, <=, >=, ==, !=) and Logical operations(and , or)
# 11 - Algorithms(flowcharts, pseudocode, natural language)
# 12 - Sequencing, Iteration(for, while) and Selection(if, elif, else)
# 13 - Lists, Strings, Slicing, Indexing
# 14 - Functions, arguments, custom functions(def, return), multiple returned values, default values, built-in functions 
# 14 - string functions(.upper(), .lower(), .capitalize(), .find()), list functions(len(), .append(), insert(), .pop()) 

print("\nHello World")
if type("text") == str:
    print("String")
    
for i in range(10):
    print("Phase:", i+1)
    
animal = "Dog"
print(animal[0])

cart = [
    "milk", 
    "eggs", 
    "apples"
]
cart[0] = "banana"
animals = [
  "cat",
  "dog",
  "bird",
  "hamster"
]
print(animals[1:3]) # dog, bird
print(animals[:2]) # cat, dog
print(animals[1:]) # dog, bird, hamster
print(animals[-1]) # hamster
print(animals[-3:-1]) # dog, bird
print(animals[1:-1]) # dog, bird
animals[:2] = "Hawk", "Eagle"