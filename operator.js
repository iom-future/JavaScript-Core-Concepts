/*//ARITHMETIC OPERATOR
function add(num1,num2){
   return num1 + num2;
}
console.log(add(2,3));

function subtract(num1,num2){
   return num1 -num2;
}
console.log(subtract(2,3));

function multiply(num1,num2){
  return num1 * num2;
}
console.log(multiply(2,3));

function division(num1,num2){
  return num1 /num2;
}
console.log(division(2,3));

function remainder(num1,num2){
  return num1 %num2;
}
console.log(remainder(2,3));*/

//COMPARISON OPERATORS
/*
let isGreaterThan = 2>6;
console.log(isGreaterThan);

let isGreaterThanEqualTo = 7>= 3;
console.log(isGreaterThanEqualTo);

let isLesserThan = 2<6;
console.log(isLesserThan);

let isLesserThanEqualTo = 7<= 3;
console.log(isLesserThanEqualTo);*/


//EQUALITY OPERATOR
//Loose Equality -  two equal signs
/*when comparing two var with diff datatype it converts one to the other
* then compare the both if both are similar (after the conversion to same datatype)
* it returns true -  truthy*/
/*let x = 3;
let y = '3';
let result = x == y;
//console.log(typeof x,typeof y);
console.log(result);

//Strict equality -  three equal sign
/!* compares without conversion i.e., the normal equality comparison*!/
console.log(x===y);*/

/*
//TERNARY OPERATOR
let balance = 100;
let sapaLevel = balance <=100 ? "boss level": "just broke"
console.log(sapaLevel);
*/

//LOGICAL OPERATOR(LO)
//search null coalescing

// OR LO
let orResult = true || true;

//AND LO
let andResult = true && false;

//NOT LO
let notResult = !false;
//logically: if it's NOT false, then its truthy(evaluate to true)

//NULL COALESCING LO
/*let a =0
;
let nulResult = a ?? "happy";
console.log(nulResult)*/

//LO WITH NON-BOOLEAN VALUE

/*what evaluates to falsy are: null,undefined,empty string,0,false,not
a number and truthy values are the opposite
 */
/*moving from left to right the OR operator returns the first
truthy value(if any is found), and if none is found
 it returns nothing not even false*/

//let compare = false || "iom";
//console.log(compare);

//real life application
let signinAsGuestName =" user212238";
let inputtedUsername = '';
let displayedUsername = inputtedUsername||signinAsGuestName;
console.log(displayedUsername);


//ARITHMETIC PRECEDENCE
//BODMAS
let result = 2 + 2/2 * 2 -2**2;
console.log(result);

