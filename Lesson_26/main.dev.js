"use strict";

// const randomNumber = Math.floor(Math.random() * 10);
// let userAnswer = +prompt("Add your number");
// while (randomNumber !== userAnswer) {
//     userAnswer = +prompt("Add your number");
// }
// let userAnswer;
// Even less popular than while loops
// do {
//     userAnswer = +prompt("Add your number");
// } while (randomNumber !== userAnswer);
// Not a very popular method
// let index = 0;
// while (index < 10) {
//     console.log("Hello!", index);
//     index++;
// }
// Most popular and flexible loop
// for (let i = 0; index >= 100; i++) {
//     console.log("Hello!", index);
// }
// Inside of these loops you are free to write any method or condition
// for (let i = 100; index >= 0; i--) {
//     console.log("Hello!", index);
// }
// for (let i = 1; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log("Hello", i);
//     }
// }
// You kan work with two keywords that only works in loops. Break stops the entire loop and exits it. Continue stop (skip one step) the loop and jump to the next loop
// for (let i = 1; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log("Hello", i);
//         // break;
//         // continue;
//     }
// }
// Arrays - if you need to stora an amount of data (ie user names)
// const names = ["Sam", "Paloma", "Helena", "Liya", "David"];
// Array is a simple version of objects. Simple data structure that can store an infinite amount of data types. Arrays can be stored in an array
// names.length - 1 will always show the last item of the array without needing to know the number.
// For loops are the most common loops to use together with arrays
// console.log(`Hello, ${names[0]}`);
// for (let i = 1; i <= names.length - 1; i++) {
//     console.log(`Hello, ${names[i]}`);
// }
// You can make a for loop inside a foor loop. Useful if you have an array inside an array
// const newNames = ["Sam", "Paloma", "Helena", "Liya", "David", ["Sara", "Sam"]];
// console.log(`Hello, ${newNames[0]}`);
// for (let i = 1; i < newNames.length; i++) {
//     if (Array.isArray(newNames[i])) {
//         const innerArray = newNames[i];
//         for (let j = 0; j < innerArray.length; j++) {
//             console.log(`Hello, ${innerArray[j]}`);
//         }
//     } else {
//         console.log(newNames[i]);
//     }
// }
// Function is a reusable piece of your code. In the real world we use functions.
var names = ["Sam", "Paloma", "Helena", "Liya", "David"]; // Parameters works the same as other variables but you don't need to write const or let

function sayHello(userName) {
  // Body of our function
  if (userName) {
    var formattedVal = userName.toUpperCase();
    console.log("Hello, ".concat(formattedVal));
  }
}

for (var i = 0; i < names.length; i++) {
  sayHello(names[i]);
} // sayHello(names[0]);
// sayHello(names[1]);
// sayHello(names[2]);
// sayHello(names[3]);
// sayHello(names[4]);
// Chose some logical meaning in the naming of the function. Get is good to describe get date, get speed etc. If is called is. Handlers like click etc are called events
// Pure function is an ideal function that you should use. Don't have any side effects on the function. It should only do one thing.
// All optional parameters should go at the end. It's not possible to skip parameter in the middle
// function getSpeed(distance, time, lunchBreak) {
//     let speed = 0;
//     if (lunchBreak) {
//         speed = Math.round(distance / (time + lunchBreak));
//     } else {
//         speed = Math.round(distance / time);
//     }
//     // Read up on the return logic
//     return speed;
// }
// Shorter version of the same code
// function getSpeed(distance, time, lunchBreak = 0) {
//     const speed = Math.round(distance / (time + lunchBreak));
//     // Read up on the return logic
//     return speed;
// }
// console.log(getSpeed(500, 3, 2));
// function getPerimeter(side) {
//     return side * 4;
// }
// console.log(getPerimeter(50));
// sideA as a default parameter, if two are not put in (otherwise it will show NaN)


function getRectanglePerimeter(sideA) {
  var sideB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sideA;
  return sideA * 2 + sideB * 2;
}

console.log(getRectanglePerimeter(50)); // Three or four parameters are more than enough
// Function declaration.
// function displayNumber() {
//     console.log(arguments);
// }
// Function expression. What's the difference is a very popular technical question (not really a difference).
// const displayNumber = function () {
//     console.log(arguments);
// }
// IIFE - immediately invoked function expression. Also a very popular technical question. It's a function you can call at the moment of the finnish
// (function sayHello() {
//     console.log("Hello");
// })();
// Arrow function. When we need to use it as a callback function, when your passing function as a parameter for another function
// const myArrowFunction = () => {
//     console.log("Hello");
// };
// Already created function, part of global object window. Const take memory space. Arrow function allows us to do the same without impact of performance
// setTimeout(() => {
//     console.log("Hello");
// }, 5000);
// Code below doesn't work. Revisit lesson
// const seconds = 0;
// setInterval(() => {
//     console.log(seconds);
//     seconds++;
// }, 1000);
// setTimeout(myArrowfunction, 5000);
// Homework will be loop and condition part 2. Focus on the last task if your not doing all of them. Expected to be in function model