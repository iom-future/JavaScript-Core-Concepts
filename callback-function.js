//FIRST METHOD OF EXECUTING A CALLBACK FUNCTION
// function showCalBackFunc(callBackFunc){
//   console.log(callBackFunc(3,4));
// }
//
//you declare the call back function
// function cb(a,b){
//   return a + b;
// }
//you pass a reference of it as an argument in the main function
// showCalBackFunc(cb);

//SECOND METHOD OF EXECUTING A CALLBACK FUNCTION
/*When using a call back function
you run(call) the call back function in the main function even before declaring it
,but it has to have a parameter(name) in the main func
in this case callBackFunc is the parameter(name) for the call back function
in this case showCalBackFunc is the main function*/
function showCalBackFunc(callBackFunc) {
    //where you call a function is where/when you pass the arguments
    //running call back func even before declaration
    console.log(callBackFunc(4, 5));
}
 /*calling the main function
this is where you can declare your callback function
 and pass it as an arguments to your main func, hence the name call back func
using this method of writing call back func, when declaring the call back func  it can be anonymous(nameless)*/
 showCalBackFunc(function(a,b){
   return a + b;
})