console.log("Class 04 // 15");

let decimalNumber = 1.254545489;
console.log(decimalNumber);
let fixedRoundedNumber = decimalNumber.toFixed(2);
console.log(fixedRoundedNumber);

// using Math
let roundedNumber = Math.round(decimalNumber);
console.log(roundedNumber);

console.log("Negative -112 to positive", Math.abs(-112));

// DICE ROLL

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);


// make random 4 digit number
let randomNumber = Math.floor(Math.random() * 9000) + 1000;
console.log(randomNumber);