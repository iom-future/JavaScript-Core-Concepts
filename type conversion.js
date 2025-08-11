let money = "100";
//convert from string to number
//method 1
money = parseInt(money);
//method 2
money = +money;
//method 3
money= Number(money);

console.log(money);
console.log(typeof money);


let year = 2025;
//converting from number to string
//method 1
year = year.toString();
//method 2
year = String(year);
console.log(year);
console.log(typeof year);

let floatingNum= "100.345";
//convert from string to float
floatingNum = parseFloat(floatingNum);
console.log(floatingNum);
console.log(typeof floatingNum);