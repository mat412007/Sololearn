// JavaScript
// Objects
// JavaScript variables are containers for data values. Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons. These values are called properties
let person = {
    name: "John", 
    age: 31, 
    favColor: "green", 
    height: 183
   };
// You can access object properties in two ways
console.log(person.name); // John
console.log(person['name']); // John
// JavaScript's built-in length property is used to count the number of characters in a property or string
console.log(person.favColor.length); // 5

// Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type. The standard way to create an "object type" is to use an object constructor function
function person(name, age, color) {
    this.name = name; // The this keyword refers to the current object
    this.age = age;
    this.favColor = color;
  }
// Once you have an object constructor, you can use the new keyword to create new objects of the same type
let p1 = new person("John", 42, "green");
let p2 = new person("Amy", 21, "red");
// Access the object's properties by using the dot syntax
console.log(p1.age); // 42

// Methods are functions that are stored as object properties, like console contains .log()
// A method is a function, belonging to an object. It can be referenced using the this keyword. The this keyword is used as a reference to the current object, meaning that you can access the object's properties and methods using it.
function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
      this.name = name; // this.name refers to the name property of the object
    }
  }
let p = new person("David", 21);
p.changeName("John");
// You can also define the function outside of the constructor function and associate it with the object
function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear; // Note that it's not necessary to write the function's parentheses when assigning it to an object
  }
function bornYear() {
  return 2016 - this.age; // The this keyword is used to access the age property of the object, which is going to call the method
}
let per = new person("A", 22);
console.log(p.yearOfBirth());


