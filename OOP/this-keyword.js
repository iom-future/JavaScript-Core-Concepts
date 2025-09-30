// A keyword that refers to an object [it belongs] based on where it is used
//used within a method : the this keyword refers to the object that houses the method
//used outside a method or in a function: refers to the global object; the window object

//this keyword used outside a method or in a function ;refers to the global object; the window object
console.log(this); // === console.log(windows);

/*delete this.document;*/
//this keyword used outside a method or in a function
function printThis() {
  return this;  //=== return window
}
console.log(printThis());

//this keyword, used within a method; refers to the object that houses the method
let obj = {
  firstName: 'isaac',
  lastName: 'moses',
  fullName: function() {
    return this; // === return obj
  }
}

//THE CATCH
//this keyword, used within a method created using arrow function; refers to the global object; the window object
let obj2 = {
  firstName: 'isaac',
  lastName: 'moses',
  fullName: ()=> {
    return this; // !== return obj but === return windows
  }
}

//CHALLENGE
let person = {
  firstName: 'isaac',
  lastName: 'moses',
  age: 17,
  greetWithRegularFunc: function() {
    return `hello my name is ${this.firstName} and i am ${this.age} year old`
  },
  greetWithArrowFunc: ()=>{
    return `hello my name is ${this.firstName} and i am ${this.age} year old`
  }
}
let displayMsg = person.greetWithRegularFunc();
console.log(displayMsg);
let displayMsg2 =person.greetWithArrowFunc();
console.log(displayMsg2);
