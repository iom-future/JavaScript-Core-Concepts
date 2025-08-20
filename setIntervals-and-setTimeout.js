/*the set time interval function allows you to repeat a block of code(passed as a parameter )
* in a given time interval;the code repeats after 3 seconds- a loop that repeat at a certain time intervals
* the first parameter : is what's to be executed after ....
the second param : the time that determine the interval(time) the first param is to be executed*/
// setInterval(()=>console.log('this will execute every 3 seconds'),3000);

/*the set timeout function execute what's within it after a specified delay;
wait for five seconds then do this....
the first parameter : is what's to be executed after ....
the second param : the time that determine the delay of the first param
 */
//setTimeout(()=>console.log('this function will be executed after 4 seconds'),4000);

//STOPPING SET INTERVAL FUNCTION
/* to stop the infinite looping of the setInterval function you use the clearInterval in coordination with the setTimeout
 */
//fun fact: you don't have to log the interval variable to use the value it self-logging(if that's a word)
const interval = setInterval(()=>console.log('this will execute every 3 seconds'),3000);
setTimeout(function(){
  clearInterval(interval);
  console.log('the set interval stop after 10 second');
},10000);
