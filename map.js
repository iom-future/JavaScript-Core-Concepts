//MAP
/*-is an upgrade for the object data structure it allows you to store key value pairs of different data type;
* your key can be a ifferent dat type like boolean,number unlike just string and numbers in object*/
const map = new Map
//equivalent to --const map = {}
const keyOneOfMap = 'string'; //key of first property in the map
const keyTwoOfMap = 2;
const keyThreeOfMap = {};
const keyFourOfMap = function(){};
const keyFiveOfMap = true;

//puttting values/property in map -- use .set() method
map.set(keyOneOfMap,10);
map.set(keyTwoOfMap,'a string');
map.set(keyThreeOfMap,true);
map.set(keyFourOfMap,'function');
console.log(map);

//GETTING A PARTICULAR ENTRIES/PROPERTY - use .get()
map.get(keyOneOfMap);

//GET KEYS FROM MAPS WITH TH KEY METHOD
console.log(map.keys());

//GET VALUES FROM PROPERTY OF THE MAP USING VALUES METHOD
console.log(map.values());

//DELETE A PROPERTY(USING THE KEY)
map.delete(keyThreeOfMap);
console.log(map);

//GETTING THE SIZE / LENGTH using the SIZE property
console.log(map.size);

//ITERATING OVER A MAP['s key and value)
//using for-of loop
for(let [keys,values] of map){
  console.log(`${keys} and ${values} `)
}

//ITERATING OVER A MAP KEYS ONLY
for(let keys of map.keys()){
  console.log(keys);
}
/*map.keys()--gets the key of the maps and put into an array
*
* */
//ITERATING OVER A MAP KEYS ONLY
for(let values of map.values()){
  console.log(values);
}

//CHALLENGE
let newMap = new Map();
let key1='a';
let key2 = 'b';
let key3 = 'c';

map.set(key1,1);
map.set(key1,2);
map.set(key1,3);
console.log(map.get(key1));
map.size
map.delete(key1);


//COMPARE WITH OBJECT
let obj = {
  true: 'happy', //can use string as key
  1: 'comrade', //can use number as key
  /*function(){}: 'value', */ //cant add a function as a key
}
console.log(obj)