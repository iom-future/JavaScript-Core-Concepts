//FOR EACH HELPER(array method)
//this method performs an logic(action)[that is specified by the call back function] FOR EACH of the elements in an array
//syntax: array.forEach(callback function (eachElementOfTheArray, IndexOfEachElementOfTheArray, theWholeArray)
// {'the codes that states the action to be carried out on each element'})
const colors =['red','green','blue'];

//LEVEL 1 of using FOREACH
//syntax: array.forEach(callback function (eachElementOfTheArray)=>{'the codes that states the action to be carried out on each element'})
colors.forEach((eachColor)=>{console.log(eachColor)});

console.log(colors[0].substring(1)); //does same function as the slice method
console.log(colors[0].slice(1));

//LEVEL 2 of using FOREACH
let primaryColor1,primaryColor2,primaryColor3;
//syntax: array.forEach(callback function (eachElementOfTheArray, IndexOfEachElementOfTheArray, theWholeArray)
// {'the codes that states the action to be carried out on each element'})
colors.forEach((color,index,array)=>{
   [primaryColor1,primaryColor2,primaryColor3] =array[index]=color[0].toUpperCase() + color.substring(1);
});
console.log(primaryColor1,primaryColor2,primaryColor3);


//if you ever make the forEach callback function to RETURN a value you get an error;
// it's mostly for taking action(logic) on each element which turns it to a non-reusable one( just one-time use) --like logging it to the console not returning it to be used anywhere in your code base[like a normal function]
/*
const capitalizeColors = colors.forEach((color,index,array)=>{
    array[index]=color[0].toUpperCase() + color.substring(1);
});
console.log(capitalizeColors);*/
/*
if you ever make the forEach callback function to RETURN a value you get an error; you make a for Each callback function return a value by
1)storing it in a variable(function expression)
2)using a return key word within it*/

//MAP METHOD

//FILTER METHOD

//FIND METHOD

//EVERY METHOD

//SOME METHOD



//REDUCE METHOD
function calculateProduct(arrayOfNumbers){
    return arrayOfNumbers.reduce((previousProduct,currentElement)=> previousProduct * currentElement
    );
}
let numArray = [1,2,3,4,5];
console.log(calculateProduct(numArray));