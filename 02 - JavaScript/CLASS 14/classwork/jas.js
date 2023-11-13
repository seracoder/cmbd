console.log(40 % 2);  // this gives the remainder: 0
console.log(10**2);  // this gives the power of the number: 100


if (1 || 2) {
    console.log("OR true");
}


if (1 && 2) {
    console.log("AND true");
}

// ternary operator: condition ? expr1 if true : expr2 if false
let age = 20;
let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

let mark_math = 80;
let mark_science = 50;
let mark_english = 60;

let total = mark_math + mark_science + mark_english;

let average = total / 3;