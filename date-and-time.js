//To work with date and time you use the date constructor or call it as a function
//DATE CONSTRUCTOR
let date = new Date();
console.log(date);

//AS A FUNCTION(that receives Zero param)
let date2 = Date();
console.log(date2);

/*To personalize the date you can pass in values in this format:
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
console.log(month);

//GETTING DIFFERENT TIME FORMAT
console.log("DIFFERENT DATE FORMAT");
let changeDate = new Date();
let dateInDifferentFormat = changeDate.toDateString();//date only in written format
console.log(dateInDifferentFormat);
//the dateObject.toString() does same thing as the Date() function
dateInDifferentFormat=changeDate.toString();//data and time in written format
console.log(typeof dateInDifferentFormat);

dateInDifferentFormat=changeDate.toISOString();//date and time in new Date() displayed format but in string form
console.log(dateInDifferentFormat);

dateInDifferentFormat=changeDate.toLocaleDateString();//only date in the xx/x/xxxx
console.log(dateInDifferentFormat);
dateInDifferentFormat=changeDate.toLocaleString();//date and time ''''''
console.log(dateInDifferentFormat)

//SETTING DATE
console.log(date.setDate(4))
console.log(date.setUTCFullYear(7,6,8))