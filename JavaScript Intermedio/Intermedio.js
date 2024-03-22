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
var p = new person("David", 21);
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
var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

// The DOM (Document Object Model)
/* When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen
The DOM of an HTML document can be represented as a tree structure with a set of boxes, each one with different content. HTML elements become interrelated nodes in the tree, each one can be a parent, a sibling or a child.
It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript 
*/
// There is a predefined document object in JavaScript, which can be used to access all elements on the DOM. In other words, the document object is the owner (or root) of all objects on your webpage
document.body.innerHTML = "Some text";
// As the body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property, it can be used on almost all HTML elements to change its content

// Selecting Elements
// All HTML elements are objects. And as we know every object has properties and methods. The document object has methods that allow you to select the desired HTML element
document.getElementById(id).elId.innerHTML = 'Change' // finds element by id
var elClass = document.getElementsByClassName(n) // finds elements by class name and returns them as an array
elClass[0].innerHTML = 'Change'
var elTag = document.getElementsByTagName(n) // finds elements by tag name and returns them as an array
for (let i = 0; i < elTag.length; i++) {
  elTag[i].innerHTML = "Hi there";
}
// Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM
var element = document.getElementById('id');
element.childNodes // returns an array of an element's child nodes.
element.firstChild // returns the first child node of an element.
element.lastChild // returns the last child node of an element.
element.hasChildNodes // returns true if an element has any child nodes, otherwise false.
element.nextSibling // returns the next node at the same tree level.
element.previousSibling // returns the previous node at the same tree level.
element.parentNode // returns the parent node of an element.

// Changing Elements
// We can change the text content of an element using the innerHTML property. Similarly, we can change the attributes of elements
var el = document.getElementById("myimg");
el.src = "apple.png"; // We change the src attribute
// The style of HTML elements can also be changed using JavaScript. All style attributes can be accessed using the style object of the element
var x = document.getElementById("demo");
x.style.backgroundColor = "6600FF"; // The property names are replaced with camelCase versions
x.style.width = "100px"; // We change the width property

// Adding and Removing Elements
// We can create new nodes with:
/*
- element.cloneNode() clones an element and returns the resulting node.
- document.createElement(element) creates a new element node. 
- document.createTextNode(text) creates a new text node.
*/
var p = document.createElement("p");
var node = document.createTextNode("Some new text");
p.appendChild(node);
// Once created these nodes must be appended to other existing elements by:
/* 
- element.appendChild(newNode) adds a new child node to an element as the last child node.
- element.insertBefore(node1, node2) inserts node1 as a child before node2.
*/
var div = document.getElementById("demo");
div.appendChild(p);
var copy = div.cloneNode();
div.insertBefore(copy, p);
// We can also remove an HTML element, by selecting the parent of the element and use the removeChild(node) method
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);
// An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
// We can also replace elements by using the element.replaceChild(newNode, oldNode) method
var p = document.createElement("new");
var parent = document.getElementById("demo");
var child = document.getElementById("old");
parent.replaceChild(p, child);

// Animations
// Now that we know how to select and change DOM elements, we can create a simple animation
// For this we use an Attribute for CSS called position, we know the values are relative or absolue. The animation is created relative to the absolute 
// To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the setInterval() method, which allows us to create a timer and call a function to change properties repeatedly at defined intervals
function move() {
  if(pos >= 150) {
    clearInterval(t); // We use the clearInterval() method to stop the tim
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}
var pos = 0; 
var box = document.getElementById("box");
var t = setInterval(move, 10);

// Handling Events
// You can write JavaScript code that executes when an event occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form. When an event occurs on a target element, a handler function is executed
onclick() // occurs when the user clicks an element
onload() // occurs when a page has loaded
onunload() // occurs when a page has unloaded
onchange() // occurs when the content of a form element, the selection, or the checked state have changed and the focus is lost from the element
onmouseover() // occurs when the pointer is moved onto an element or onto one of it's children
onmouseout() // occurs when the pointer is moved out of an element or out of one of it's children
onmousedown() // occurs when the user presses a mouse button over an element
onmouseup() // occurs when the user releases a mouse button over an element
onblur() // occurs when an element loses focus
onfocus() // occurs when an element gets focus
// Corresponding events can be added to HTML elements as attributes
;<p onclick="someFunc()">"some text"</p>
// Event handlers can be assigned to elements
var x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}
// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element. You can also add many event handlers of the same type to one element, i.e., two "click" events
element.addEventListener(eventType, functionName, useCapture);
// The first parameter is the event's type (like "click" or "mousedown"). The second parameter is the function we want to call when the event occurs. The third parameter is a Boolean value specifying whether to use event bubbling or event capturing
// Note that you don't use the "on" prefix for this event; use "click" instead of "onclick".
function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction); // Removes the event
}
var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);

// Event Propagation
// There are two ways of event propagation in the HTML DOM: bubbling and capturing
/* 
Event propagation allows for the definition of the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

- In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p> element's click event is handled first, followed by the <div> element's click event.

- In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is handled first, followed by the <p> element's click event
*/
// Capturing goes down the DOM.
// Bubbling goes up the DOM.
// The addEventListener() method allows you to specify the propagation type
elem1.addEventListener("click", myFunction, true);// Capturing propagation
elem2.addEventListener("click", myFunction, false);// Bubbling propagation

// Creating an Image Slider
// Now we can create a sample image slider project. The images will be changed using "Next" and "Prev" buttons
function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }
function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}
var num = 0;
var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
];
<div>
  <button onclick="prev()"> Prev </button>
  <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
    width="200px" height="100px"/>
  <button onclick="next()"> Next </button>
</div>

// Form Validation
// HTML5 adds some attributes that allow form validation
// The required attribute can be added to an input field to make it mandatory to fill in
// More complex form validation can be done using JavaScript
// The form element has an onsubmit event that can be handled to perform validation
function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      return true;
    }
  }
  alert("The values should be equal and not blank");
  return false;
}
<form onsubmit="return validate()" method="post">
  Number: <input type="text" name="num1" id="num1" />
  <br />
  Repeat: <input type="text" name="num2" id="num2" />
  <br />
  <input type="submit" value="Submit" />
</form>
// The form will not get submitted if its onsubmit event returns false

// ECMAScript
// ECMAScript (ES) is a scripting language specification created to standardize JavaScript
/*
The Sixth Edition, initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015, adds significant new syntax for writing complex applications, including classes and modules, iterators and for/of loops, generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies.
In other words, ES6 is a superset of JavaScript (ES5). The reason that ES6 became so popular is that it introduced new conventions and OOP concepts such as classes
*/

// ES6 Variables and Strings
// In ES6 we have three ways of declaring variables
var a = 10;
const b = 'hello';
let c = true;
// The type of declaration used depends on the necessary scope. Scope is the fundamental concept in all programming languages that defines the visibility of a variable
/*
- var & let
Unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope, let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.
- const 
const variables have the same scope as variables declared using let. The difference is that const variables are immutable - they are not allowed to be reassigned
*/
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
// Template literals are a way to output variables in the string. Prior to ES6 we had to break the string
/* Pior */
let n = 'David';
let msg = 'Welcome ' + n + '!';
/* ES6 */
let n2 = 'David';
let msg2 = `Welcome ${n2}!`;
// Template literals are enclosed by the backtick ( ` ) character instead of double or single quotes. The ${expression} is a placeholder, and can include any expression, which will get evaluated and inserted into the template literal

// Loops and Functions in ES6
// The for...in loop is intended for iterating over the enumerable keys of an object
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
  console.log(v); // a b c
}
let arr = [1, 2, 3];
for (let i in arr) {
  console.log(arr[i]); // 1 2 3
}
// ES6 introduces the new for...of loop, which creates a loop iterating over iterable objects
let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val); // x y z
}
for (let ch of "Hello") {
  console.log(ch); // H e l l o
}
// ES6 introduces a new syntax for writing functions
/* Prior */
function add(x, y) {
  var sum = x+y;  
  console.log(sum);
}
/* ES6 */
const add = (x, y) => {
  let sum = x + y;  
  console.log(sum);
}
// You can skip typing function and return, as well as some parentheses and braces
const x = () => alert("Hi");
const greet = x => "Welcome " + x;
// Let's say we have an array, and for each element of the array we need to execute a function. We use the forEach method of the array to call a function for each element
/* Prior */
arr = [2, 3, 7, 8];
arr.forEach(function(el) {
  console.log(el * 2);
});
/* ES6 */
arr = [2, 3, 7, 8];
arr.forEach(v => {
  console.log(v * 2);
});
// In ES6, we can put the default parameters right in the signature of the functions
/* Prior */
function test(a, b = 3, c = 42) {
  return a + b + c;
}
/* ES6 */
const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); // 50

// ES6 Objects
// JavaScript variables can be Object data types that contain many values called properties. An object can also have properties that are function definitions called methods for performing actions on the object
let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); // 12
// You can also use a property value shorthand when initializing properties with a variable by the same name
let height = 5;
let health = 100;
let athlete = {
  height,
  health
};
// When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name
var a = {x: 1, x: 2, x: 3, x: 4};
// With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};
// ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object. Object.assign() is also useful for creating a duplicate of an existing object
let human = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};
let newStudent = Object.assign({}, human, student);
let newStudent2 = Object.assign({}, human, student, {name:"Max"});
// Here we used Object.assign() where the first parameter is the target object you want to apply new properties to, in this case a new object. Every parameter after the first will be used as sources for the target. There are no limitations on the number of source parameters. However, order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on
// If we use assignment to create a new Object, it acts as a reference to the original, that-s why we must use Object.assign
let person = {
  name: 'Jack',
  age: 18
};
let newPerson = Object.assign({}, person); 
newPerson.name = 'Bob';
console.log(person.name); // Jack
console.log(newPerson.name); // Bob

// ES6 Destructuring
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. ES6 has added a shorthand syntax for destructuring an array
let array = ['1', '2', '3'];
let [one, two, three] = array;
console.log(two); // 2
// We can use also destructure an array returned by a function
let a = () => {
  return [1, 3, 2];
};
let [uno, tres, dos] = a();
//The destructuring syntax also simplifies assignment and swapping values
let a, x, y = 4, d = 8;
[a, x = 6] = [2]; // a = 2, x = 6
[y, d] = [d, y]; // y = 8, d = 4
// Similar to Array destructuring, Object destructuring unpacks properties into distinct variables
let ob = {h:100, s: true};
let {h, s} = ob;
console.log(s); // true
// We can assign without declaration, but there are some syntax requirements for that
let a, o;
({o, a} = {a: 'Hello ', o: 'Jack'});
console.log(a + o); // Hello Jack
// However, you can also do it as follows where the () are not required
let {a, z} = {a: 'Hello ', z: 'Jack'};
console.log(a + z);
// You can also assign the object to new variable names
var i = {h: 42, s: true};
var {h: foo, s: bar} = i;
// console.log(h); // Error
console.log(foo); // 42
console.log(bar); // true
// Finally you can assign default values to variables, in case the value unpacked from the object is undefined
var obje = {i: 42, name: "Jack"};
let {i = 10, age = 20} = obje;
console.log(i); // 42
console.log(age); // 20

// Rest and Spread
// Prior to ES6, if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function. Let's write a function that checks if an array contains all the arguments passed
function containsAll(arr) {
  for (let k = 1; k < arguments.length; k++) { // arguments accesses to the arguments passed to the function
    let num = arguments[k];
    if (arr.indexOf(num) === -1) { // indexOf() returns the index of an item and -1 if it does not exist
      return false;
    }
  }
  return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));
// While this does the job, ES6 provides a more readable syntax to achieve variable number of parameters by using a rest parameter
function containsAll(arr, ...nums) {
  for (let num of nums) {
    if (arr.indexOf(num) === -1) {
      return false;
    }
  }
  return true;
}
// The ...nums parameter is called a rest parameter. It takes all the "extra" arguments passed to the function and makes an array with them. The three dots (...) are called the Spread operator
function magic(...nums) {
  let sum = 0;
  nums.filter(n => n % 2 == 0).map(el => sum+= el); // .filter() creates a new array with the values that respect the condition, and .map() takes one value from the array at a time to execute the function inside of it
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6)); // 12
// The Spread Operator is similar to the Rest Parameter, but it has another purpose when used in objects or arrays or function calls (arguments)
// It is common to pass the elements of an array as arguments to a function
/* Prior */
function myFunction(w, x, y, z) {
  console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4)); // Adds an item to the end of the array
/* ES6 */
const myFunction = (w, x, y, z) => {
  console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);
/*--------------*/
var dateFields = [1970, 0, 1];  // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);
// Before ES6, we used the following syntax to add an item at middle of an array
var a = ["One", "Two", "Five"];
a.splice(2, 0, "Three");
a.splice(3, 0, "Four");
// You can use methods such as push, splice, and concat, for example, to achieve this in different positions of the array. However, in ES6 the spread operator lets us do this more easily
let newArr = ['Three', 'Four']; 
var a = ['One', 'Two', ...newArr, 'Five'];
console.log(a);
// In objects it copies the own enumerable properties from the provided object onto a new object
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 5 };
var clonedObj = {...obj1}; // { foo: "bar", x: 42 }
var mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }
// However, if you try to merge them you will not get the result you expected
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 5 };
var merge = (...objects) => ({...objects});
var mergedObj = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }
var mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }

// ES6 Classes
// A class can be used to create multiple objects of the same structure. 
// A class uses the keyword class and contains a constructor method for initializing. The constructor is a special method which is used for creating and initializing an object created with a class.There can be only one constructor in each class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
var square = new Rectangle(5, 5);
var poster = new Rectangle(2, 3); 
// You can also define a class with a class expression, where the class can be named or unnamed
var Square = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
// In the unnamed class expression, a variable is simply assigned the class definition
var Square = class {
  constructor(height, width) {
   this.height = height;
   this.width = width;
 }
};
// Class Methods in ES6
// ES6 introduced a shorthand that does not require the keyword function for a function assigned to a method's name. One type of class method is the prototype method, which is available to objects of the class.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // get represents the method that can be accessed
  get area() { // You do not use the function keyword
    return this.calcArea();
  }
  calcArea() { // You do not use the function keyword
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25
// Another type of method is the static method, which cannot be called through a class instance. Static methods are often used to create utility functions for an application
// The static distance method is called directly using the class name, without an object
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
p1 = new Point(7, 2);
p2 = new Point(3, 8);
console.log(Point.distance(p1, p2));
// Inheritance in ES6
// The extends keyword is used in class declarations or class expressions to create a child of a class. The child inherits the properties and methods of the parent
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.
// If there is a constructor present in the subclass, it needs to first call super() before using this. Also, the super keyword is used to call parent's methods
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    super.speak(); // Super
    console.log(this.name + ' barks.');
  }
}
dog = new Dog('Rex');
dog.speak();

// ES6 Map and Set
// ES6 Map
// A Map object can be used to hold key/value pairs. A key or value in a map can be anything (objects and primitive values
// The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each)
/*
An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.
*/
// The size property returns the number of key/value pairs in a map
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log(map.size); // 2
/* 
Methods
- set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.

- get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.

- has(key) Returns true if a specified key exists in the map and false otherwise.

- delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.

- clear() Removes all key/value pairs from map.

- keys() Returns an Iterator of keys in the map for each element.

- values() Returns an Iterator of values in the map for each element.

- entries() Returns an Iterator of array[key, value] in the map for each element.
*/
map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true
for (let kv of map.entries())
  console.log(kv[0] + " : " + kv[1]);
// ES6 Set
// A Set object can be used to hold unique values (no repetitions are allowed). A value in a set can be anything (objects and primitive values)
// The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values
// The size property returns the number of distinct values in a set
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size); // 5
/*
Methods
- add(value) Adds a new element with the given value to the Set.

- delete(value) Deletes a specified value from the set.

- has(value) Returns true if a specified value exists in the set and false otherwise.

- clear() Clears the set.

- values() Returns an Iterator of values in the set.
*/
set = new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for (let v of set.values()) // Examinates an array with th values
  console.log(v);

// More on ES6
// ES6 Promises
// A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method
setTimeout(function() { // Executes the code inside of it after a certain lapse of milliseconds
  console.log("Work 1");
  setTimeout(function() {
    console.log("Work 2");
  }, 1000);
}, 1000);
console.log("End"); // End Work1 Work2
// ES6 comes to the rescue in such situations. A promise can be created as follows
// Here, resolve is the method for success and reject is the method for failure.
// If a method returns a promise, its calls should use the then method which takes two methods as input; one for success and the other for the failure
function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
    if (work === "")
      reject(Error("Nothing"));
    setTimeout(function() {
      resolve(work);
    }, 1000);
  });
}
asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End");