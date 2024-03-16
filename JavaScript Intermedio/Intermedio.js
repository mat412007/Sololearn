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

// Arrays
// Arrays store multiple values in a single variable
// To create a new array we use the keywords new Array
var courses = new Array("HTML", "CSS", "JS");
// You refer to an array element by referring to the index number written in square brackets
let course = courses[0]; // HTML
// Attempting to access an index outside of the array, returns the value undefined

// You can also declare an array, tell it the number of elements it will store, and add the elements later
var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
// JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically
var courses = new Array();
courses[0] = "CSS";
courses[1] = "JS";
courses[2] = "C++";
// For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax
var courses = ["HTML", "CSS", "JS"];

// JavaScript arrays have useful built-in properties and methods.
// An array's length property returns the number of its elements
document.write(courses.length); // 3
console.log(courses[0].length); // 4
// JavaScript's concat() method allows you to join arrays and create an entirely new array
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2); // [HTML, CSS, JS, C++]

// Associative Arrays 
// While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays, JavaScript does not. However, you still can use the named array syntax, which will produce an object
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person);
document.write(person["age"]);

// Math Object
// The Math object allows you to perform mathematical tasks and includes several properties
document.write(Math.E) // 2.718281828459045
document.write(Math.LN2) // 0.6931471805599453
document.write(Math.LN10) // 2.302585092994046
document.write(Math.LOG2E) // 1.4426950408889634
document.write(Math.LOG10E) // 0.4342944819032518
document.write(Math.PI) // 3.141592653589793
// The Math object contains a number of methods that are used for calculations
var x = 6;
var y = 7;
Math.abs(x); // Returns the absolute value of x
Math.acos(x); // Returns the arccosine of x, in radians
Math.asin(x); // Returns the arcsine of x, in radians
Math.atan(x); // Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
Math.atan2(y, x); // Returns the arctanget of the quotient of it's arguments
Math.ceil(x); // Returns x rounded upwards to the nearest integer
Math.floor(x); // Returns x rounded downwards to the nearest integer
Math.round(x); // Rounds x to the nearest integer
Math.sqrt(x); // Returns the square root of x
Math.exp(x); // Returns the value of x times E
Math.log(x); // Returns the natural logarithm (base E) of x
Math.max(x, y, x); // Returns the number with the highest value 
Math.min(x, y, x); // Returns the number with the lowest value
Math.pow(x, y); // Returns the value of x to the power of y
Math.random(); // Returns a random float number between 0 and 1
Math.sin(x); // Returns the sine of x (x is in radians)
Math.cos(x); // Returns the cosine of x(x in radians)
Math.tan(x); // Returns the tangent of an angle

// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)
// It will continue calling the function until clearInterval() is called or the window is closed
function myAlert() {
  alert("Hi");
}
setInterval(myAlert, 3000); // Calls myAlert every 3 seconds
// Write the name of the function without parentheses when passing it into the setInterval method

// Date Object
// The Date object enables us to work with dates
// A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds
// Using new Date(), create a new date object with the current date and time
var d = new Date(); // Current date and time
var d = new Date(1000); // How many millisecond added to the date JavaScript started counting them
var d = new Date('January 04 2007'); // String with the data
var d = new Date(2007, 0, 4, 12, 30, 0, 0); // year, month, day, hour, minute, second, milliseconds
// When a Date object is created, a number of methods make it possible to perform operations on it
var d = new Date()
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())


