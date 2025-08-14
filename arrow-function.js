//Also called at arrow function it's a shorter and concise way of writing a traditional function

//TRADITIONAL METHOD
/*function greet(username){
  return `hello ${username}`;
}*/

//ARROW FUNCTION
let greet=(userName)=>{
  return `hello ${userName}`;
}
greet("isaac")

const square = (number)=> number**2

console.log(square(2))