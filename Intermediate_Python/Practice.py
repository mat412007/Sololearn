print()
def uppercase(func):
    def wrapper():
        message = func()
        modified_message = message.upper()
        return modified_message
    return wrapper()

@uppercase 
def greet():
    return "Welcome!"
print(greet)

print()
