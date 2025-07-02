//if -else if - else statement

/*
let distanceFromObstacle = 100; //metres
let ifCondition = distanceFromObstacle <5;

if (ifCondition)
  console.log("stop car");
else if (distanceFromObstacle >=5 && distanceFromObstacle <20)
  console.log("blow horn");
else
  console.log("car is moving");


//SWITCH CASE
let studentID  =2;
switch(studentID){
  case 1:
    console.log("he is the head boy");
    break;
  case 2:
    console.log("she is the head girl");
    break;
  case 3:
    console.log('ass head boy');
    break;
  case 4:
    console.log('asst head girl');
    break;
}*/


//FOR LOOP
let numbers = [0,1,2,3,4,5,6,7];
let index;
/*
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);*/
console.log(numbers.length);
for (index = 0;index < numbers.length;index ++ ){
   console.log(numbers[index]);
   if (index ===4){
     break;
   }

}

// //WHILE LOOP
let idx = 0;
// while(idx < 4){
//   console.log("hello");
//   idx ++;
// }

//DO - WHILE LOOP
// do{
//   console.log("world");
//   idx++;
// }while (idx < 4);

//FOR - IN LOOP
//used to iterate over object
 const profile = {
  name: "isaac moses",
  class: "O level graduate",
  age: 16,
   favouriteFood: "fried yam",
 isRich: true,

 };

 for (const profileKeys in profile){
   console.log(profile[profileKeys]);
 }

//FOR -OF LOOP : an easier way to iterate over an array
/*let digits = [1,2,3,4,5,6,7];
for(const digit of digits){
  console.log(digit);
}*/

