// exams problems


console.log("Question 1");
// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let num = 10;
let num2 = 20;
if (num > num2) {
  console.log("num is greater than num2");
} else {
console.log("num is greater than num1");
}

console.log("Question 2");
// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

num = 0;
if (num > 0) {
  console.log("num is positive");
} else if (num < 0) {
    console.log("num is negative");
}
else {
    console.log("num is zero");
}

console.log("Question 3");
// Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

num = 10;
if (num % 10 === 0) {
  console.log("num is divisible by 10");
} else {
    console.log("num is not divisible by 10");
}

console.log("Question 4");
// Solve the problem with Javascript  to check whether a number is even or odd. 

num = 10;
if (num % 2 === 0) {
  console.log("num is even");
} else {
    console.log("num is odd");
}

console.log("Question 5");
// Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let char = "a";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
if (alphabet.includes(char)) {
  console.log("char is in the alphabet");
} else {
    console.log("char is not in the alphabet");
}

console.log("Question 6");
// Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temp = 30;
if (temp >= 30) {
  console.log("temp is hot");
} else if (temp <= 25) {
    console.log("temp is cold");
} else {
    console.log("temp is normal");
}

console.log("Question 7");
// Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let num3 = 30;
if (num > num2 && num > num3) {
  console.log("num is greater than num2 and num3");
} else if (num2 > num && num2 > num3) {
    console.log("num2 is greater than num and num3");
} else {
    console.log("num3 is greater than num and num2");
}


console.log("Question 8");
// Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let x = 10;
let result = x % 2 === 0 ? "Even Number" : "Odd Number";
console.log(result);

console.log("Question 9");
// Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 40;
let numTwo = 50;
if (numOne > 30 && numTwo > 30) {
  console.log("numOne and numTwo are both greater than 30");
} else {
    console.log("numOne and numTwo are not both greater than 30");
}

console.log("Question 10");
// Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age = 15;
if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
    console.log("Not a teenager");
}
