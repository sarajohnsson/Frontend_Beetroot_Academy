"use strict";

// Data operators that automatically transform condition into a boolean type
var a = 10 > 7;
var userName = prompt("Please enter your name: ");
console.log(userName.length); // if (userName) {
//     console.log(`The username is ${userName}.`);
// } else {
//     console.log(`Please type in a valid user name`);
// }
// userName
// userName.length >= 2

if (userName && userName.length >= 2) {
  console.log("The username is ".concat(userName, "."));
} else {
  console.log("Please type in a valid user name");
}

var side = prompt("Provide a square side");

if (side > 0) {
  var perimeter = side * 4;

  if (true) {
    console.log(perimeter);
  }
} else {
  console.log("Side should be greater than 0");
}

var age = +prompt("Add your age"); //String will give you NaN

console.log(age);

if (isNaN(age) || age < 0) {
  console.log("Valid number required");
} else if (age > 0 && age <= 18) {
  console.log("You are just a child");
} else if (age > 18 && age <= 59) {
  console.log("You are middle aged");
} else {
  console.log("You are experienced");
} // 1-18 child
// 18-59 middle age
// 59+ experienced


var dayNumber = +prompt("Provide a day number");

if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 8) {
  console.log("Monday");
} else if (dayNumber === 1) {}

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Incorrect day");
    break;
}

var properAnswer = 6;
var userAnswer = +prompt("Add your number");

if (userAnswer === properAnswer) {
  console.log("It's correct");
} else {
  console.log("Try again");
}

var userNamePerson = promt("Add your name"); // Basement for form validation logic

if (userNamePerson) {
  // Will transform it into a boolean. If it's false it will stop at the &&
  userNamePerson && console.log("Hello", userNamePerson);
}

var gameName = prompt("Add you name"); // if (!gameName) {
//     gameName = prompt("Add you name");
// }
// Will be executed until true

while (!gameName) {
  gameName = prompt("Add you name");
} // Homework Loops & condition - Create a mini calculator


var num1 = +promt("Number1");
var num2 = +promt("Number2");
var action = +promt("Action");

while (!num1) {
  num1 = +promt("Number1");
}

while (!num2) {}

while (action !== "+" && action !== "-" && action !== "/" && action !== "*") {
  action = prompt("Action");
} // Counting number back and forth (Optional)
// Read up on the modulus
// const num = a(456);
// const num1 = a / 100;
// const num2 = a (% 10 / 100)
// const num3 = a % 10