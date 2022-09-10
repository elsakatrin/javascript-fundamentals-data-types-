
//Javascript indtroduction - fundamentals & datatypes
//I'm going to put the requierd examples down below and explain





//variables
//Variables are containers for storing data and data values
//The variable var is an older variable and is used if you want your code to run in older browsers
// variable names cannot be reserved keywords 
//names should be meaningful and show us porpose/descripton
//names cannot start with number 
//cannot contain a space or hyphen (-)
//names are case sensitive - firstletter of a word should be lowecase and the second word should have uppercase first letter
//Examples of how to put in names :
let firstName = 'Elsa'; 
const lastName = 'Katrín';
//Const variables can not be reassigned. 


//Primitives/Value types - string, number, undefined and null 
//boolean literal - boolean can either be true or false
let isApproved = true; 
let notApproved = false;
 country = 'Iceland'; //string literal 
//if you type: typeof country in the console in chrome it comes up as 'string'
let age = '27'; // number literal
let name = 'undefined' //Means that variable has not been assigned
let color = 'null' //null means that it has no value/no color selected. Used the clear the value of a variable

//arithmetic operations/Math method
let a = 100;
let b = 50;
let x = a + b;
console.log (a + b)
// =150


//Truthy and Falsey
//Null, undefined, 0, false, "", '', NaN are always falsey




//Array with multiple values
    //Output one of the items
let selectedColors = ['red, blue'];
selectedColors[2] = 'green';
selectedColors[3] = '1';
//to see the colors and numbers in the console I would have to write console.log(selectedColors) and see t
 // with the console. log below I used length property to see how many colors there are
console.log(selectedColors.length);



//Here I created an object
//This is an object named person
let person = {
    name: 'Elsa',
    age: '27'
} //here I put two related variables inside an object. Makes the code looks cleaner. 
//Now I could reference the Person Object instead of referencing both name and age
// Heres how you could log it: console.log(person)
//If I want to change the name of the person I can use:

//Dot notation
person.name = 'Katrín'
//Here's how you could log it: console.log(person.name);
//cleaner and easier to use dot notation than bracket notation

// Bracket notation
person ['name'] = 'Ólafsdóttir'
//Here's how you could log it: console.log(person.name)


//Date and time;
const d = currentDate();
console.log(currentDate);
//Use strict mode


