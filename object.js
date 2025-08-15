const dog ={
  name:"sky,",
  breed : "golden retrieval",
  age: 2,
  10:"ten",
  //enhanced object literal way of creating a method
  bark(){
    return "woof! woof!!";
  },
  //traditional way of creating a method
  eat: function (){
    console.log("chomp");
  }
}

delete dog.age;
dog.favouriteHuman = "isaac";
dog["colour"] = "black and brown";
console.log(dog.bark());
dog.eat()


//METHOD
//a function inside an object

//Creating a METHOD , method 1 - external(global) method
/*function sum(a,b){
    return a+ b;
}
const array = {
    0:3,
    1:5,
    sum
}
let result= array.sum(array[0],array[1]);
console.log(result);*/

//Creating a METHOD , method 2 - internal(local) method

const array = {
    0:3,
    1:5,
    sum:function(a,b){
        return a+b;
    }
}
let result= array.sum(3,6);
console.log(result);



//ENHANCED OBJECT LITERALS-and easier way to define object property and method
//if the key name is identical with the value variable name then use one [name]
function userProfile(name,age,country){
  return{
    name, //--- name(key): name(param;value-variable-name)  without Enhanced Object Literal
    age, //--- age(key): age(param)
    country, //--- country(key): country(param)
    intro(){
      return `my name is ${name} i am from ${country}, and i am ${age} years old`;
    } /* intro:function(){
      return `my name is ${name} i am from ${country}, and i am ${age} years old`;
    }*/
  }
}
const user1 = userProfile("isaac",16,"Nigeria")
console.log(user1);
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
