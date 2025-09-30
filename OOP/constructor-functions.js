/*  regular functions used to create the blueprint for creating multiple instance of object
with same structure an behavior
* */

//when naming constructor function use PascalNotation and it should be a noun
function People(firstName,lastName,age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.info = function() {
   return 'this is a programmer'
  }
}

//  NEW KEYWORD
//1. first create an empty object {}
//2. set "this" to point to that object
//3. Then returns the newly created object; all by using 'new' keyword
const user1 = new People('isaac','Moses',17);  // creating an instance; creating the function out of the blueprint

//BEHIND THE SCENE
/* Function People(firstName,lastName,age) {
//1. FIRST CREATE AN EMPTY OBJECT {}
   let newObject = {
      this.firstName = firstName //2. SET "THIS" TO POINT TO THAT OBJECT
      this.lastName = lastName // this syntax for initializing a  value to a property to 'this' object
       this.age = age
      }
      return newObject //3. Then returns the newly created object; all by using 'new' keyword
}*/
console.log(user1.info());

//TODO: search the diff btw factory and constructor function

//CHALLENGE

function Persons(name,age,gender){
  this.name = name
  this.age = age
  this.gender = gender
  this.info = function() {
    return `you are ${this.name} of the ${this.gender} clan, age ${this.age} `
  }
}

let person1 = new Persons('isaac',17,'male');
let person2 = new Persons('Nancy',15,'female');
console.log(person1.info());
console.log(person2.info());


//CHALLENGE 2
function Cars(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year =year;
  this.color = color;
  this.start = function() {
    return`Starting ${this.make} ${this.model} ........`
  }
  this.stop = function() {
    return`Stopping ${this.make} ${this.model} ........`
  }
}
let car1 = new Cars('toyota','camry',2027,'black');
console.log(car1.start());
console.log(car1.stop());