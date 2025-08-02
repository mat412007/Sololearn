package Intermediate_Java;

/*
Each object has three dimensions: identity, attributes, and behavior.

Classes can be described as blueprints, descriptions, or definitions for an object. You can use the same class as a blueprint for creating multiple objects.
They have attributes and methods

public is an access modifier, meaning that it is used to set the level of access. You can use access modifiers for classes, attributes, and methods.
For classes, the available modifiers are public or default (left blank), as described below:
public: The class is accessible by any other class.
default: The class is accessible only by classes in the same package.
The following choices are available for attributes and methods:
default: A variable or method declared with no access control modifier is available to any other class in the same package.
public: Accessible from any other class.
protected: Provides the same access as the default access modifier, with the addition that subclasses can access protected methods and variables of the superclass (Subclasses and superclasses are covered in upcoming lessons).
private: Accessible only within the declared class itself.

Constructors are special methods invoked when an object is created and are used to initialize them. 
A constructor can be used to provide initial values for object attributes.
You can think of constructors as methods that will set up your class by default, so you don’t need to repeat the same code every time.
The constructor is called when you create an object using the new keyword.
A single class can have multiple constructors with different numbers of parameters.

A reference type stores a reference (or address) to the memory location where the corresponding data is stored.
When you create an object using the constructor, you create a reference variable so that you can edit the objetc's values directly

Math class provides predefined methods for mathematical operations.
- Math.abs() returns the absolute value of its parameter.
- Math.ceil() returns as a double a floating point value up to the nearest integer value. 
- Math.floor() rounds a floating point value down to the nearest integer value.
- Math.max() returns the largest of its parameters.
- Math.min() returns the smallest parameter.
- Math.pow() takes two parameters and returns the first parameter raised to the power of the second parameter.


When you declare a variable or a method as static, it belongs to the class, rather than to a specific instance. This means that only one instance of a static member exists, even if you create multiple objects of the class, or if you don't create any. It will be shared by all objects.

Use the final keyword to mark a variable constant, so that it can be assigned only once

Packages are used to avoid name conflicts and to control access to classes.
A package can be defined as a group made up of similar types of classes, along with sub-packages.

Encapsulamiento, herencia, polimorfismo, abstracción

Encapsulamiento:
The idea behind encapsulation is to ensure that implementation details are not visible to users. The variables of one class will be hidden from the other classes, accessible only through the methods of the current class. This is called data hiding. For this, we use the key word private along with setters and getters

Herencia:
Inheritance is the process that enables one class to acquire the properties (methods and variables) of another. With inheritance, the information is placed in a more manageable, hierarchical order. To inherit from a class, use the extends keyword.

Polimorfismo:
Polymorphism, which refers to the idea of "having many forms", occurs when there is a hierarchy of classes related to each other through inheritance. A call to a member method will cause a different implementation to be executed, depending on the type of the object invoking the method. It's basically a method with different applications.

Abstracción:
Data abstraction provides the outside world with only essential information, in a process of representing essential features without including implementation details. The concept of abstraction is that we focus on essential qualities, rather than the specific characteristics of one particular example.
In Java, abstraction is achieved using abstract classes and interfaces.
An abstract class is defined using the abstract keyword.
- If a class is declared abstract it cannot be instantiated (you cannot create objects of that type).
- To use an abstract class, you have to inherit it from another class.
- Any class that contains an abstract method should be defined as abstract.

Method override and overloading

Interfaces:
An interface is a completely abstract class that contains only abstract methods.
Use the implements keyword to use an interface with your class.
Some specifications for interfaces:
- Defined using the interface keyword.
- May contain only static final variables.
- Cannot contain a constructor because interfaces cannot be instantiated.
- Interfaces can extend other interfaces.
- A class can implement any number of interfaces.

Upcasting y Downcasting

Clases anonimas:
Anonymous classes are a way to extend the existing classes on the fly.
When creating the Machine object, we can change the start method on the fly.
The @Override annotation is used to make your code easier to understand, because it makes it more obvious when methods are overridden.

Clases internas:
Java supports nesting classes; a class can be a member of another class.
Creating an inner class is quite simple. Just write a class within a class. Unlike a class, an inner class can be private. Once you declare an inner class private, it cannot be accessed from an object outside the class.
The inner class can access all of the member variables and methods of its outer class, but it cannot be accessed from any outside class.

Enums:
An Enum is a special type used to define collections of constants.
After declaring an Enum, we can check for the corresponding values with, for example, a switch statement.
You should always use Enums when a variable (especially a method parameter) can only take one out of a small set of possible values.

JAVA API:
The Java API is a collection of classes and interfaces that have been written for you to use.
The Java API Documentation with all of the available APIs can be located on the Oracle website at 
http://docs.oracle.com/javase/7/docs/api/
Once you locate the package you want to use, you need to import it into your code.

*/

abstract class Animal{ /*Creo una clase */
    protected int age;
    public String name;
    protected String genero;
    public String raza;
    public Animal(String g){ /* Esto es un construcor con un parametro */
        this.genero = g; /* Le doy a un atributo el valor de un parametro del constructor */
    }
    public Animal(){ /* Esto es un constructor extra sin parametros */
        this.genero = "No definido";
    }
    public abstract void sound(); /* Creo un metodo abstracto que no necesita cuerpo */
    public String getName(){ /* Getter */
        return name;
    }
    public void setAge(int n){ /* Setter */
        this.age = n; /* The keyword this is used to refer to the current object. */
    }
    public String getGenero(){
        return genero;
    }
}

class Dog extends Animal{ /* Creo una subclase de Animal */
    public Dog(String n, String r, int a, String g){
        this.name = n;
        this.raza = r;
        this.age = a;
        this.genero = g;
    }
    public void sound(){
        System.out.println("Woof");
    }
}

class Cat extends Animal{
    public Cat(String n, int a){
        this.name = n;
        this.age = a;
    }
    public void sound(){
        System.out.println("Meow");
    }
}

public class Main {
    public static final double PI = 3.1415;
    public static void main(String args[]){
        System.out.println();
        Dog dog = new Dog("Max", "Salchicha", 7, "Macho"); /*Creo un objeto de Dog con parametros*/
        dog.sound(); /*Llamo al metodo bark del objeto dog creado */
        dog.name = "Ciro"; /*Accedo a un atributo del objeto y le doy un valor */
        dog.setAge(5);
        Dog perro = new Dog("Rex", "Golden Retriever", 7, "Masculino"); /* Creo un objeto de la subclase */
        perro.sound(); /* Llamo al metodo que heredó la subclase Dog de Animal */
        Cat cat = new Cat("Sara", 8);
        cat.sound();
        System.out.println(dog.getGenero());
    }
}
