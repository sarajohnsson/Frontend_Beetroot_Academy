"use strict";

// Arrays
// Const is a protected element
// const arr1 = ["sara", "david", "paloma", "sam"];
// Used to store a lot of data
// Can add/remove items
// push, pop, shift, unshift
// Find some elements
// includes(), indexOf()
// findIndex(), find()
// filter()
// Check if elements is in array
// To do some actions with elements
// To get the last element
// arr1[arr1.length - 1];
// Assigns new value to any particular element, number doesn't matter
// arr1[0] = "Liya";
// Lot of examples where you want to make a copy of your array.
// This is not a copy but a reference and therefore will change the original as well. It can improve the performance as it avoids makeing new arrays.
// const arr2 = arr1;
// arr2[0] = "Alex";
// New array
// const arr3 = [...arr1];
// To att and remove we have push, pop, shift, unshift
// Push is your best friend, allows you to add elements at the end position of the array.
// arr1.push;
// Check some elements. Will have true if it's there and false if it's not
// arr1.includes("david");
// To find position of an element
// We can only check the first and last index if we have more elements with the same value
// arr1.indexOf("david");
// arr1.lastIndexOf("david");
// If you want to have all the davids, for example if there's more than one. Then you can filter the array. Not a very typical method
// function findDavid(el) {
//     // return el === "David";
//     return el.length > 4;
// }
// // Not calling the function but passing the function as an argument. Method find requires an instruction.
// const myDavid = arr1.find(findDavid);
// const myDavid = arr1.find((el) => {
//     return el.length > 4;
// });
// Needed for arrays with objects, that have a more omplex structure
// const myEl = arr1.findIndex((el) => {
//     return el.length === 3;
// });
// Filter array and find all Davids
// const arr1 = ["sara", "david", "paloma", "sam", "david", "alex", "david"];
// const davidArray = arr1.filter((el) => {
//     return el.length === 3;
// });
// Will reverse element, can be useful in one case. Useless in real world but common technical question
// arr1.reverse();
// const str = "Alex";
// str.split("");
// str.split("").reverse();
// str.split("").reverse().join();
// str.split("").reverse().join("");
// const numberArr = [22, 1, 34, 5, 65, 123, 21, 6];
// Callback function
// numberArr.sort((a, b) => {
//     // 22 - 1 -> x (20)
//     // 1 - 22 -> -x (-21)
//     // 22 - 22 -> 0 (0)
//     // if (a > b) {
//     //     return 1;
//     // } else if (a < b) {
//     //     return -1;
//     // } else if (a === b) {
//     //     return 0;
//     // }
//     return a - b;
//     // change sorting direction
//     // return b - a;
// });
// Can be written in an even shorter form
// numberArr.sort((a, b) => a - b);
// push, pop, sort, shift, unshift changes the form of the array, called mutations.
// doesitmutate.xyz
// All characters should be uppercase or lowercase for the sort method to work on strings
// const arr1 = ["sara", "david", "paloma", "sam", "david", "alex", "david"];
// arr1.sort();
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// arr1.forEach((el) => {
//     console.log(el);
// });
// // Map is useful for react to create an entire html page
// const uppercaseArr = arr1.map((el) => {
//     return `<p>${el}</p>`;
// });
// This is an object, typeOf
// const product = {
//     propductName: "potato",
//     price: 12,
//     isDiscounted: true,
// };
var productCart = [{
  propductName: "potato",
  price: 12,
  isDiscounted: true
}, {
  propductName: "tomato",
  price: 8,
  isDiscounted: true
}, {
  propductName: "wine",
  price: 80,
  isDiscounted: false
}, {
  propductName: "meat",
  price: 40,
  isDiscounted: false
}]; // Sort price of cart, common case

productCart.sort(function (a, b) {
  return a.price - b.price;
}); // Objects are perfect replacements for if constrictions and switch case
// const userNum = +prompt("Add number"); // 2
// const days = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
// };
// console.log(days[userNum]);

var users = [{
  name: "Thomas Hardy",
  email: "thardy@mail.com",
  adress: "Portland USA",
  phone: "1715552222"
}, {
  name: "Dominique Perrier",
  email: "dperrier@mail.com",
  adress: "Berlin Germany",
  phone: "3135551112"
}];
var newEmployee = {
  name: "Maria Anders",
  email: "manders@mail.com",
  adress: "Paris France",
  phone: "5024446666"
};
users.push(newEmployee);