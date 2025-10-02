//prototype is a property inside a newly created object, which is an object itself; it is the parent Object of the newly created object
//when you create an object it is formed out of something else[the parent] that is the PROTOTYPE
//NB: object in this case doesnt explicitly mean {}, it mean an datatype with a typeof 'object'

//we can check the prototype(parent object;the object whose properties it will inherit) of an object using
//theObject.__proto__
//theObject.constructor.prototype
//Object.getPrototypeOf(theObject)
let obj ={ //creating an object via this method creates the object from the default object which will be its prototype
  age: 11
}

let newObj = Object.create(obj); //newObj created from obj, therefore obj is the protype(parent) of newObj
console.log(newObj);  //the prototype[properties] won't be displayed as a property of the newObj in console.log

//the 3 logs should display the same thing, but the second log of newObj prototype, displays the prototype(parent) of its own prototype(parent) i.e displays its grand parents
console.log(newObj.__proto__);
console.log(newObj.constructor.prototype);
console.log(Object.getPrototypeOf(newObj)); //=== console.log(obj);


//WORKING WITH ANOTHER DATA TYPE OF TYPE OBJECT; ARRAY
let arr =[1,2,3,5];
console.log(arr);

//NEW FINDINGS
//the array [object] has a prototype [that is within it] that contains the various array methods
//every object datatype is being created out of an existing object that houses its initial behavior; just like a new born baby(child) must have a parent(prototype)
//The base prototype(the grand father of all prototype) is called '__proto__'

//========== CHANGING THE BUILT-IN METHODS OF AN OBJECT PROTOTYPE=========
Array.prototype.pop= function() {
    return 'popped';
}

let array = [1,2,3];
//Behind The Scene
//let array2 = Array(1,2,3);

