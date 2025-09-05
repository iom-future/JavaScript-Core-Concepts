/* imagine if the spread operator doesn't just split elements of iterable but store them… that's
* where destructuring comes in, where you are able to split iterables into different elements then
* store each element in it own variable*/

//ARRAY DESTRUCTURING
//create iterable
const value = ['one','two','three']
//destructure iterable
const[one,two,three] = value; //variable names are in the []
//[one,two,three] = ['one','two','three'] //the variable array pairs with the value array
//['one','two','three'] i.e index 1 of a var array = index 1 of value array
/*const extraValue = ['one','two','three']*/

//providing default value to a variable
const[num1='twelve',num2,num3] = value;

//DESTRUCTURING A FUNCTION(that returns an array or iterable)
function food(){
  return ['bread','spaghetti','pizza'];
}
const [breakfast,lunch,dinner] = food();
console.log(breakfast);
console.log(lunch);
console.log(dinner);

//ignoring a value i.e not saving a value in a variable but moving on to save others
function numbers() {
  return [1,2,3,5,];

}

const [a, ,c,d,]=numbers(); //add an empty space to ignore value
console.log(a,c,d);

//ARRAY DESTRUCTURING AND RSET OPERATOR
const[number1,...restOfNumber] = value;
console.log(number1);
console.log(restOfNumber);



//OBJECT DESTRUCTURING
//where the order doesnt matter but the name does matter unlike array destructuring

const student={
  studentName: 'isaac',
  class: 'undergraduate',
  age:17,
  rollNumber:21

}
//putting a variable name in the {} that doesnt match a key gives you undefined-- '....the name does matter'
//const {rollNumber,age,studentName}=student; // putting {rollNum} (for rollNumber} gives undefines cause '....the name does matter'
/*console.log(rollNumber,age);
console.log(studentName);*/

//RENAMING KEYS NAME IN OBJECT DESTRUCTURING
const {studentName: name,class:grade}=student; //from studentName to name and class to grade

//OBJECT DESTRUCTURING AND REST OPERATOR
//stores the rest of the variable inside an object
let {aNum,bNum,...theRestProperties}={aNum:1,bNum:2,c:12,d:13,e:15};
console.log(theRestProperties);

//FUNCTION-PARAMETER DESTRUCTURING
//you destructure the arguments in the parameter parenthesis like you would using let{}= iterableArguments; you just drop the 'let' and the iterableArgument
function myFunc({studentName,age,rollNumber}) {
  console.log(studentName);
  console.log(age);
  console.log(rollNumber);
}
//the arguments passed are iterables(able to be destructured)
myFunc(student);

//DESTRUCTURING ARRAY IN OBJECT
//the logic: change the object property to array then it automatically does the array destructuring
// object property -->array-->destructure array-->to variables
const CV={
  studentName: 'isaac',
  degree: ['WAEC','Bachelor degree','PhD'],

}
function getCVItems({studentName,degree:[firstDegree,secondDegree,thirdDegree]}) {

}

//DESTRUCTURING ARRAY ARGUMENTS
let arrayItem = [1,2,3];
function getArrayItems([one, two, three]) {
  console.log(one);
  console.log(two);
  console.log(three);
}
getArrayItems(arrayItem);

//NESTED DESTRUCTURING (ARRAY OF OBJECTS)
//destructuring array you use [] to store the variable, and you use {} for objects
//destructuring an object inside an array you destructure in layers; you destructure the array [] then the object(with in the array) [{}]
let information = [
    {
        id: 1756183435596,
        purpose: 'Buy a laptop',
        amount: 500000,
        tag: 'school',
        date: 'Mon Aug 25 2025',
    },
    {
        id: 1756183514850,
      purposeOfSecondElement: ['scholarship expenses','land'],
        amount: '1500000',
        tag: 'school',
        date: 'Mon Aug 25 2025',
    },
];

//LEVEL 1
let [{purpose: purposeOfFirstElement}]=information;
console.log(purposeOfFirstElement);

//FURTHER LEVEL(CONFUSION) OF THE NESTED DESTRUCTURING
let [/*ignore first element of information array*/,{ purposeOfSecondElement:[purpose1,purpose2]}]=information;

console.log(purpose1);
console.log(purpose2);

//NESTED DESTRUCTURING 2 (NESTED ARRAY)
let songs = [["take the hit",['sunflower'],'everything is nothing']
  ,["oh Lord",'outro','the search']
  ,["water fountain",'knife back','nancy got a haircut'],
  ["Finger of God",'Haigiazo','worthy of my praise']];

let[vaultBoySongs]=songs;
let[[/*take the hit*/,[myAllTimeFav]]]=songs
console.log(vaultBoySongs);
console.log(myAllTimeFav);