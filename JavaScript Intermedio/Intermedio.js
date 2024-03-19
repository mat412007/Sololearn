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

