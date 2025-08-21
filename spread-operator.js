//...spread operator is opposite to rest operator it takes an iterable (e.h array ,string)
// and process them into individually elements stored in a shallow object. Enhancing readability
//spread operator with functions[parameter]
function giveMe3(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
giveMe3(1,2,3);

//with spread operator
console.log('with spread operator');
function newGiveMe3(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
//store in iterable
let arg = [1,2,3];
newGiveMe3(...arg)//split into individual element for each param a:1 ,b:2 ....

//USING WITH ARRAY for concatenation
const num = ['one','two','three'];
const num2 = ['four','five','six'];
const concat = [...num,...num2];//concatenated shallow copy of arr num and num2
console.log(concat);
console.log(...num);//similar to .join(' ') array method but not limited to array

//USING WITH OBJECT
const obj1 = {x:1,y:2}
const obj2 = {z:3}
const obj3 = {...obj1,...obj2}
console.log(...obj2);