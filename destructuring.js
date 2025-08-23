/* imagine if the spread operator doesnt just split elements of iterable but store them.... thats
* where destructuring comes in ,where you are able to split iterables into different elements then
* store each element in it own variable*/

//ARRAY DESTRUCTURING
//create iterable
const value = ['one','two','three']
//destructure iterable
const[one,two,three] = value; //variable names are in the []
//[one,two,three] = ['one','two','three'] //the variable array pairs with the value array
//['one','two','three']  i.e index 1 of var array = index 1 of value array
/*const extraValue = ['one','two','three']*/

//providing default value to a variable
const[num1='twelve',num2,num3] = value;

//destructuring a function-returned array
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

//assigning the rest of the value to a variable --- as an array
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
const {rollNumber,age,studentName}=student; // putting {rollNum} (for rollNumber} gives undefines cause '....the name does matter'
console.log(rollNumber,age);
console.log(studentName);


