// My first javascript code
//VARIABLES 
let Firstname = 'Emmanuel', 
lastName = 'Agbomeikhe';
console.log(Firstname, lastName, 'paige');
// variables cannot be named as a 
// reserved key word
//should be meaningful
//cannot start with a number
// they cannot contain a space or hyphen
//they are case sensitive
const interestRate = 0.8;
let price = 50;
console.log(price + 'naira');
console.log(price + 20 * 50);
console.log(interestRate);
//TYPES OF VARIABLES
let name = 'Emmanuel'; //String literal
let age = 16; //Number literal
let isApproved = true; //Boolean literal
let gender; //Undefined
let Height = null;  //Null
//OBJECT
let person = {
    name: 'Emmanuel', age: 16
};
//to change value in object       //{}=object
//Dot Notation
person.name = 'John';
console.log(person.age);
//Bracket Notation
person['age'] = 16 + 1
console.log(person['age']);
//ARRAYS
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'black';
selectedColors[3] = 1;
selectedColors[4] = undefined;
selectedColors[5] = null;
console.log(selectedColors);
console.log(selectedColors.length);
//FUNCTIONS
function greet(name, age) {
    console.log('Hello ' + name + ' ' + age)
}
greet('Emmanuel', 'Agbomeikne');
greet('Joy', 'Sissy');
//TYPES OF FUNCTIONS
//performing a task
//task = display sth on console
function greet(name, age) {
    console.log('Hello ' + name + ' ' + age)
}
greet('Emmanuel', 'Agbomeikne');
//calculating a value:
function square(number){
   return number * number;
};
console.log(square(150) + ' is the square of the selected digit');


