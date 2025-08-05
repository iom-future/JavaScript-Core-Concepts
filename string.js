let firstName = 'isaac ';
let lastName = 'MOSES';
let untrimmedString = '       string       ';


//STRING CONCATENATION
//method 1--concat method
let fullName = firstName.concat(lastName);

//method 2
fullName=firstName+lastName;
console.log(fullName);

//method 3--append
//firstName+=lastName;
//console.log(firstName);

//method 4--template literal
fullName=`${firstName}${lastName}`
console.log(fullName);

//STRING METHODS
//length
console.log(firstName.length);

//cases
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

//slice -- its really literal;just like SLICING  a bread
console.log(firstName.slice(0,3));

//split and join
//the passed argument determine how the split method split the object
//the passed argument '' specify that the split(moving and individual element to an array) should be implemented after every character
//the passed argument ' ' specify that the split should be implemented after every space
//join is the opposite of split
console.log(lastName.split('').join('-'));

//includes
console.log(lastName.includes("M"));

//trim--removes excessive space ;literally trimming a string
console.log(untrimmedString);//before trimming
console.log(untrimmedString.trim()); //after trimming




