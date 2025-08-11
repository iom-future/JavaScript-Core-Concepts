//the return keyword wraps up (all or some of) a function usage in one output
//just like summing up all it does and sending it out as a singular
function myFunction(number, multiplier) {
    return number * multiplier;
}
let result = myFunction(3, 4);
console.log(result);

//FUNCTION DECLARATION
//the normal way of writing(declaring)a function
function message(name) {
    console.log(`welcome to write.ai ${name}`);
}
message('isaac');

//FUNCTION EXPRESSION
//this is a function stored within a variable, not when calling but when writing(declaring)
const welcomeMessage = function (name) {
    console.log(`welcome to write.ai ${name}`);
};
welcomeMessage('moses');

//THE DIFF BTW FUNC DECL AND FUNC EXPRESS is
//you can call a function before declaring it but
//cants call a function before expressing it