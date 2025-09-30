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



//ARRAY
/*
let recentGamesPlayed = ['noblemen','cover fire','once human'];
recentGamesPlayed[0]= 'snake game'
console.log(recentGamesPlayed[0]);*/

//symbol
//immutable values that are unique; doesnt allow duplication of them self - the parameter it takes is like the variable unique name
let moniker = Symbol('name');
let money = 0;
console.log(typeof moniker);
console.log(moniker);

let monikers ={

}
monikers[money] =50;
monikers[moniker]='future';
monikers[moniker]='fu';
console.log(monikers);
//FUNCTIONS
function greeting(name) {
     console.log("hi " + name);
}
greeting("isaac");

function mod(num1,num2){
  return num1 % num2;
}

console.log(mod(1, 4));

//SET
let set = new Set;
set.add('happy');
set.add('sad');
set.add('sad');
console.log(typeof set);
console.log(set);