//a string is an array
let nickName = `iom`;
let lastName ="      MOSES ";
//string concatenation
//meth 1
//let fullName = nickName + lastName;
//console.log(fullName);

//meth 2 - concat method
//let fullName = nickName.concat(lastName);
//console.log(fullName);

//meth 3 - append
// nickName += lastName;
// console.log(nickName)

//meth 4 - back tick string ``
// let fullName = `${nickName} ${lastName}`;
// console.log(fullName);
//
//
// //length
// //spaces are counted also
// console.log(nickName.length);
//
// //cases
// console.log(nickName.toUpperCase());
// console.log(lastName.toLowerCase());
//
// //slice
// console.log(nickName.slice(0,3));
//
// //split and join
// console.log(nickName.split(""));
// //console.log(lastName.join());
//
// //includes
// console.log(nickName.includes("r"));
//
// //trim
// console.log(lastName);
// console.log(lastName.trim());

//TYPE CONVERSION
//convert string to number
let age = "16";
console.log(age);
console.log(typeof age);
//meth 1
// age = parseInt(age);
// console.log(age);
// console.log(typeof age);

//meth 2
// age = +age;
// console.log(age);
// console.log(typeof age);

//meth 3
age = Number(age);
console.log(age);
console.log(typeof age);