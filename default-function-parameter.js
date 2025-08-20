/*DFP - are pre-initialized arguments that are being used, to handle cases of :
when arguments being passed are undefined
and when no arguments are being passed  during a function call.
 */

const multiply =(a ,b=1)=>a * b;
console.log(multiply(2,7));