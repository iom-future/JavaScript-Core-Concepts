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
  default :
        console.log("other prefect or student");
}*/


//FOR LOOP
//including: break and continue
let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
let index;
//using loops makes you obey 'DRY'
/*
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);
console.log(numbers[index++]);*/
console.log(numbers.length);
for (index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
  if (index === 4) {
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
//used to iterate over object and get keys
const profile = {
    name: 'isaac moses',
    grade: 'O level graduate',
    age: 16,
    favouriteFood: 'fried yam',
    isRich: true,
};
let info =[];
for (const profileKeys in profile) {
  console.log(`${profileKeys}: ${profile[profileKeys]}`);
  info.push(profile[profileKeys]);
}
let [name,grade,...other]=info;
//since array is an object you can use FOR IN LOOP to get the index(keys)
let digits = [1,2,3,4,5,6,7];
for(let index in digits){
  console.log(index);
}


//FOR -OF LOOP : an easier way to iterate over array
/*let digits = [1,2,3,4,5,6,7];
for(const digit of digits){
  console.log(digit);
}*/

