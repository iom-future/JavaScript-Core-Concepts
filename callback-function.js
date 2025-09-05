/*FIRST METHOD OF EXECUTING A CALLBACK FUNCTION
* you declare the call back function before passing it['s name] as an argument
* */
function showCalBackFunc(callBackFunc){
  console.log(callBackFunc(3,4));
}

/*you declare the call back function*/
function cb(a,b){
  return a + b;
}
/*you pass a reference of it as an argument in the main function
//NOTE:you dont call it with () you pass its name(reference) only*/
showCalBackFunc(cb);

//SECOND METHOD OF EXECUTING A CALLBACK FUNCTION
/*When using a call back function
you can run(call) the call back function in the main function even before declaring it
,but it has to have a parameter[which will be its name if it's a nameless function] in the main func
in this case callBackFunc is the name for the call back function
in this case showCalBackFunc is the main function*/
function showCalBackFunc2(callBackFunc) {

    //running call back func even before declaration
    console.log(callBackFunc(4, 5));
}
 /*calling the main function;where you call a function is where/when you pass the arguments
this is where you can declare your callback function and pass it as an arguments to your main func;hence the name call back func
using this method of writing call back func, when declaring the call back func  it can be anonymous(nameless)*/
 showCalBackFunc2(function (a,b){
   return a + b;
})