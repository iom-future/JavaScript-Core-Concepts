//to work with date and time you use the date constructor or call it as a function
//date constructor
let date = new Date();
console.log(date);

//as a function(that receives Zero param
let date2 = Date();
console.log(date2);
/*to personalize the date you can pass in values in this format:
* year,month,week,day,hours,minute,seconds,milliseconds
* */

let currentDate =new Date(2025,7,17,18,13);
console.log(currentDate);

//EXTRACTING A VALUE FROM THE DATE CONSTRUCTOR -date object
const year = date.getFullYear();
const month = date.getMonth();
const onlyDate = date.getDate();//the day 1st - 31st
const day = currentDate.getDay(); //day of the week : sunday(0)-saturday(6)
const minutes = date.getMinutes();
const milliseconds = date.getMilliseconds();
console.log(milliseconds);