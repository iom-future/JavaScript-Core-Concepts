/*prototypal inheritance is just what allows an object to inherit properties a method from another object;
* borrowing the functionality (properties, method, etc.) from the parent(prototype) to the child that's without manually written it into the child
* prototypal inheritance */

function Animal(name){
      this.name =name;
}
Animal.prototype.sound=function() {
  return 'animal sound';
}

let animal1 = new Animal('frog');


//INHERITING A PROPERTY FROM ANOTHER CONSTRUCTOR FUNCTIONS
function Dog(name,breed){
  //you provide the constructor you want to inherit inside the child; attached to the call() methods
  // then pass this, and property you want to inherit into the call method
  Animal.call(this, name); //call the property name from the constructor, for duplication
  this.breed = breed
}

//INHERITING A PROTOTYPE ; THE SOUND PROTOTYPE
// This must be done BEFORE creating instances of Dog
Dog.prototype=Object.create(Animal.prototype); //Access The Dog Prototype and put a value there..... the value to be inherited

// Now create the instance after setting up the prototype
let dog1 = new Dog('bruno','shihauhau');
console.log(dog1);


console.log(Animal);
console.log(Dog.prototype);
console.log(dog1.sound());

//NEW FINDINGS
//an object created from a constructor has that constructor as its prototype