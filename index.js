// Single line comments - ctrl + /

/*
	Multiline comments
	ctrl + shift + /
*/

//Syntax and Statements

/*
	- Statements in programming are instructions that we tell the computer to perform.
	- Js Statements usually end with a semicolon(;)
	- Syntax in programming, it is the set of rules that describes how statements must be constructed.
*/

console.log("Hello Batch 138!");

//Variables
/*
	- It is used to contain data.
	- Declaring variables - tells our devices that a variable name is created and is ready to store data
	- Syntax:
		let/const variableName;
	- let keyword - used to handle values that will change over time
	- const [constant] keyword - used to handle values that will not change
*/

let myVariable;

console.log(myVariable);

// console.log(hello);

// Initializing values to variables

/*
	-Syntax:
	let/const variableName = value;
*/

let productName = 'desktop computer';

console.log(productName);

let productPrice = 18999;

console.log(productPrice);

/*
	Reassigning variable values
	- change the initial or previous value into another value
*/

productName = 'Laptop';

console.log(productName);

const interest = 3.539;

console.log(interest);
/*
interest = 4.489;

console.log(interest);
*/

let supplier;

supplier = "John Smith Tradings";

console.log(supplier)

// Declaring multiple variables
let productCode = "DC017";
const productBrand = "Dell";

console.log(productCode, productBrand);

//Data Types

/* Strings
	- strings are series of characters that create a word, a phrase, a sentence or anything related to creating text
	- strings in JS can be written either a single (') or double (") quote.
*/

let country = 'Philippines';
let province = "Metro Manila";

//String concatenation
//Multiple string values can be combined to create a single string using the "+" symbol

//Output: Metro Manila, Philippines
let fullAddress = province + ", " + country;
console.log(fullAddress);

//Output: Welcome to Metro Manila, Philippines!
console.log("Welcome to " + fullAddress + "!");

// escape character
// \n - refers to creating a new line in betwen text
let mailAddress = "Metro Manila\n\nPhilippines";
console.log(mailAddress);
let message = "John's employees went home early";
console.log(message);
message = 'John\'s employees went home early';
console.log(message);

//Numeric Data Types
//Integers/While numbers
let headcount = 26;
console.log(headcount);

//Decimal Numbers
let grade = 98.7;
console.log(grade);

//Exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);

// Combining text and strings
// Output: John's grade last quarter is 98.7
console.log("John's grade last quarter is " + grade);

// Boolean
// 1 / 0 or True/False
let isMarried = true;
let isGoodConduct = false;
console.log("isMarried: " + isMarried);
console.log("isGoodCondust: " + isGoodConduct);

// Array
// Array is a special kind of data type that is used to store multiple values
// Arrays can store different stat types but is normally used to store similar data types
/* Syntax
	let/const arrayName = [element0, element1, element2, .....]
*/

let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);