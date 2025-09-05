//a concise way of writitng conditions in JavaScript
//syntax: condition? expIfConditionIsTrue : expIfConditionIsFalse;
let passwordLength = 'power ranger'.length;

function passwordChecker() {
    return passwordLength > 8 ? 'strong password' : 'weak password';
}

console.log(passwordChecker());

let hasMoney =true;
let canBuyProduct = hasMoney?'buy product':'bring money';
console.log(canBuyProduct);