/*a factory function is a function that returns an object; an easier method to creating multiple object with same syntax*/
//a function that returns an object is a factory function
function factoryFunctionForProfile(firstName,lastName){
  return{
        firstName,
        lastName,
  }
}

let user1 = factoryFunctionForProfile('isaac','moses');
let user2 = factoryFunctionForProfile('baba','vos');
console.log(user1);
console.log(user2);


//CHALLENGE
function vehicle(type,brands,model,year){
  return {
    type,
    brands,
    model,
    year
  }
}

let car1 = vehicle('SUV','toyota','highlander','2025');
console.log(car1);