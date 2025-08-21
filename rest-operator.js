/* The opposite of spread operator (used mainly used with function parameter). It allows you
* make your function variadic i.e., be able to take in infinite number of parameters
* and then store them into an iterable[an array] -- just like spread operator but in reverse*/
function testRestOperator(...infiniteNumOfParam) {
  console.log(infiniteNumOfParam);
}
testRestOperator(1,2,3,5,7,8,9,0);