// JavaScript
/*JavaScript is used to make dynamic websites, create mobile apps and games, process data, and much more!
JavaScript makes web pages and applications interactive, these pages are made of three parts, structure(HTML), styles(CSS), and interactivity(JavaScript) */ 

// We can display alert messages using the alert() function, an alert box contains a message and an OK button
alert("Watch out");
// The onclick attribute in HTML acts when the element is clicked
// The simplest form of interactivity consists of an event caused by the user doing an action
// event: onclick
// action: alert()
// You can use JavaScript to change any HTML element

// There are 3 different ways to add JavaScript to your site
/*
- Inline JavaScript: directly inside HTML tags
- Internal JavaScript: inside de script tag in the HTML file
- External JavaScript: linking your site to a separate JavaScript file
*/
// The console is a browser tool that help developers test their code, like logging messages to the console to find and fix bugs in your code
console.log("Hello");
// Each statement in JavaScript ends with semicolons;

// Data comes in different shapes and forms. Computers treat different types of data in different ways
/*
- Strings: quotation marks
- Numbers: no quotation marks
*/
// Computer programs use variables to store important information  that can be used again
// To create a variable, use the word let followed by the variable name
let greet = "Hello";
// Name: greet
// Value: "Hello"
// To access the value of a variable you must call it
console.log(greet);
// A variable can be updated after it's been declared
// You don't reassing a value to a variable with the let command, it will produce an error because of 2 variables with the same name
greet = "Hey there!";
console.log(greet);

/*
Some HTML elements are placed inside others. This is called nesting
Just like in a family tree, there are relationships between different elements in a page, this is called Document Object Model(DOM)
*/ 
// You can refer to any element in the DOM using JavaScript
// We can access an element with a specific ID using:
document.getElementById("ID");
// DOM properties are values (of HTML elements) that you can get, set or change
// To access the text content of an element we use:
document.getElementById('h1').textContent;
// You can use variables to store information about the HTML elements
let h = document.getElementById('h1').textContent;
console.log(h);
h = document.getElementById('h1');
console.log(h.textContent);
// To change their style(CSS properties), we use the .style DOM property
h.style.color = "blue";

// Functions are key building blocks in JavaScript. They’ll help you make your web pages interactive and dynamic
// Functions are made of statements, instructions to be executed
// Use the function keyword followed by a name to create a new function
function gameOver(){
    let message = "Game Over";
    console.log(message);
}
// The code inside a function is executed when the function is called
// To call a function use its name followed by parentheses()
gameOver();
// JS comes with many functions that have already been defined by others and are ready to use, built-in functions, like console.log() or alert()

// Some of the standards and best practices used in JavaScript are:
/* 
- Place the <script> at the end of the body in HTML
- Order your JavaScript code in a way understandable for everyone
- Indent JS code to improve readability
- Use comments to explain to others what the code does and how
- Give variables descriptive names
- JavaScript is a case-sensitive language, meaning "A" and "a" are treated as different
- Use camel case when naming variables with more than one word, this means use capitalization to separate words in a variable name
- Variable names can't start with numbers
*/

// An input is any information that goes into a computer
// The press of a key or the click of a button are examples of inputs from the user
// The prompt() function asks the user for an input
let name = prompt("Please enter your name: ");
// We can also take input from the <input> tags from HTML
// To access the value of an input field we use .value
let v = document.getElementById('color').value;

// Working with data involves performing operations with numbers and strings
// You can perform math operations with numbers 
console.log(7 + 3);
console.log(10 - 5);
console.log(5 * 3);
console.log(10 / 2);
// The way computers operate with values depends on the data type
// When you use the + addition operator with string values the strings are joined together. This is known as concatenation
console.log("Iron" + "Man");

// A Comparison operation compares two values and return either true or false wether the comparison is right or wrong
// The values a comparison returns are Boolean values: true or false
/*
Electronic circuits inside computers use millions of tiny switches to store these true/false values
Computers use binary code to represent information. By turning switches ON and OFF, we change the information stored in a computer
*/
let higher = 10 > 5; // true
let lower = 10 < 5; // true
let equal = 5 === 6; // false

// Advanced Inputs
// The confirm() box asks the user to accept or reject something. Similar to alert() and prompt(), the box takes the focus away from the current window, and forces the user to read the message
let p = confirm("Proceed to payment?");
// A confirm() box returns true if the user clicks OK and false if the user clicks on Cancel
// A checkbox has two states: selected or deselected
// You can use .checked to get the state of a checkbox
let box = document.getElementById("c1");
console.log(box.checked); // true or false
// When working with form data, it’s a very good practice to give the whole form element an ID. Then you use .elements.name to refer to different input fields in the form, and you use .value to access the value of the selected element
let method = formId.elements.pay.value;

// Objects are the most important building blocks of modern JavaScript
// The dot (.) notation is the simplest way to access the properties of an object
document.title = "JavaScript";
// The document object represents your web page. If you want to access any other HTML element, you always start with accessing the document object
// We use the term return to refer to the result of a task

// Logical operations use Boolean values
// A logical operation takes multiple Boolean values and returns one Boolean value
/*
- AND operation (&&) results in a true value only when all the inputs are true at the same time
- OR operation (||) results in a True value if at least one of the inputs is True
*/
let and = true && true; // true 
let or = true || false; // true

// Data comes in a variety of shapes and forms. Dealing with data in the incorrect format can result in data loss or corruption
// typeof let's us check the data type stored in a variable
let t = typeof "string";
// You can convert data from one type to another to fix data quality issues
/*
- The Number() instruction converts any type of value into an number data
- The String() instruction converts any type of value into a string
*/
let number = Number("10");
let str = String(10);

// An algorithm is a set of step-by-step instructions to complete a task, placed in a certain order
// Algorithms can be represented in three different ways
/*
- Flowchart: images
- Pseucode: unique language
- Natural Language: our language
*/
// You can control the flow of instructions a computer follows, using 3 techniques: sequencing, iteration and selection
/*
- Sequencing: it means that the computer runs your code in order, from top to bottom*/
/*
- Iteration is about executing an instruction repeatedly. Iteration is commonly represented as a loop
There are while Loops and For Loops*/
let counter = 0;
while (counter < 4) {
  console.log("Message");
  counter = counter + 1;
}
for (let i = 0; i < 4; i=i+1) {
    console.log("Message " + i);
}
/*
- Selection specifies when to follow each path.
Conditional statements, or if-else statements, allow programs to perform different actions based on the conditions*/
let age = 22;
if (age <= 18) {
  alert("Young discount");
}
else if(age >= 65){
    alert("Elder discount")
}
else {
  alert("Normal discount");
}

