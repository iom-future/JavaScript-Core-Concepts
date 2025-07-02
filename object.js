//what are property within object
const dog ={
  name:"sky,",
  breed : "golden retrival",
  age: 2,
  bark(){
    console.log("woof! woof!!");
  },
  eat: function(){
    console.log("chomp");
  }
}

delete dog.age;
dog.favouriteHuman = "isaac";
dog["colour"] = "black and brown";
console.log(dog);


//FACTORY FUNCTION
//used to avoid duplication of object codes;
// write ones use anywhere

/*
function getDogObject(name,breed,age){
  return{
    name, // --- name: name,
    breed, // --- breed: breed,
    age,// ---- age: age
    bark(){
      console.log("woof! woof!!");
    },
    eat: function() {
      console.log("chomp");
    }
  };
}

let anotherDogObject = getDogObject("pali","chihuahua",5);
console.log(anotherDogObject); */


//CONSTRUCTOR FUNCTION(CF)
//an efficient way of INSTANTIATING  a function like FACTORY FUNCTION
// but in this case you initialize and create the structure(property) of the object

//CF name must be a noun and recommended to be written in pascal notation
/*
function Dog(name,breed,age){
  //this = {}
  //the "this" keyword is like a temporary placeholder name for the object


  //Add property to "this";the initialization begins
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.eat = function (){
    console.log("chomp");
  }
  this.bark = function(){
    console.log("woof!");
  }

  // return "this" object after declaring and initializing
}

let anotherDog = new Dog("gibb","lab",5);
console.log(anotherDog);*/
