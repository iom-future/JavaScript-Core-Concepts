/*
//PRIMITIVE DATA-TYPE
//string
let firstName = 'isaac'
console.log(typeof firstName)

//number
let age = 16;
console.log(typeof age);

//boolean
let isHandsome = true;
console.log(typeof isHandsome);

//symbol
const moniker = Symbol("IOM");
console.log(typeof moniker);
console.log(moniker);

//bigint
let netWorth = 100000000000n;
console.log(typeof netWorth)

//null
let stress = null;
console.log(typeof stress)

//undefined
let emotions;
console.log(typeof emotions)

//REFERENCE DATA-TYPE
//Object
let favourites = {
    country: "japanese",
    number:0,
    colour: "green",
    book: "Bible",
    countryColour: "pink"
};
var aFavourite = "number";
console.log(favourites.book);
console.log(favourites[aFavourite]);
console.log(favourites['country' +
'Colour'])

*/

//ARRAY
/*
let recentGamesPlayed = ['noblemen','cover fire','once human'];
recentGamesPlayed[0]= 'snake game'
console.log(recentGamesPlayed[0]);*/

//FUNCTIONS
function greeting(name) {
     console.log("hi " + name);
}
greeting("isaac");

function mod(num1,num2){
  return num1 % num2;
}

console.log(mod(1,4));