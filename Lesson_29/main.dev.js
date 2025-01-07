"use strict";

// Objects are a special data structure
// const car = {
//     model: "Edge",
//     manufacturer: "Ford",
//     // Can use camelCase instead of string with space
//     maxSpeed: 220,
//     hasInsurance: true,
//     owners: ["ALex", "Sam"],
//     addOwner: function (newOwnerName) {
//         this.owners.push(newOwnerName);
//     },
//     registrationLocation: {
//         zipCode: 89000,
//         country: "USA",
//         address: {
//             street: "Main street",
//             houseNumber: 12,
//         },
//     },
// };
// car.addOwner("Sara");
// Avoid errors like cannot read properties, will prevent the page from loading
// if (car && car.registrationLocation && car.registrationLocation.mistake) {
//     console.log(car.registrationLocation.address.houseNumber);
// }
// Optional caining (?.)
// console.log(car.registrationLocation?.address.houseNumber);
// const car = {
//     model: "Edge",
//     manufacturer: "Ford",
//     // Can use camelCase instead of string with space
//     maxSpeed: 220,
//     hasInsurance: true,
//     owners: ["ALex", "Sam"],
//     addOwner: function (newOwnerName) {
//         this.owners.push(newOwnerName);
//     },
// };
// Factory function. A function that returns an object
// function car(manufacturer, model, maxSpeed, owners) {
//     return {
//         // If property names is the same as the variable, we can remove it
//         // model: model,
//         // manufacturer: manufacturer,
//         // maxSpeed: maxSpeed,
//         // owners: owners,
//         model,
//         manufacturer,
//         maxSpeed,
//         owners,
//         addOwner: function (newOwnerName) {
//             this.owners.push(newOwnerName);
//         },
//     };
// }
// If you're using factury function it means that you want to have the same properties all the time but only the values will change
// When to use square brackets, when property names isn't static/constant. If we need to use variables that you don't know
// const propToShow = prompt("Which property would you like to get?");
var car = {
  model: "Edge",
  manufacturer: "Ford",
  // Can use camelCase instead of string with space
  maxSpeed: 220,
  hasInsurance: true,
  owners: ["ALex", "Sam"],
  addOwner: function addOwner(newOwnerName) {
    this.owners.push(newOwnerName);
  },
  adress: {
    country: "USA",
    zipCode: 8900
  }
}; // console.log(car[propToShow]);
// To check if a property exist or not. Will show true or false

Object.hasOwn(car, "price");
Object.hasOwnProperty("model"); // for (const key in car) {
//     // Display both values
//     // console.log(car[key]);
//     if (typeof car[key] !== "function") {
//         console.log(`Key: ${key}, value: ${car[key]}`);
//     }
// }
// // Displays the entire object
// Object.keys(car);
// const copyCar = {};
// Assign don't work with functions, only when you have properties without a method in it.
// Object.assign(copyCar, car); -> if you don't have any functions (methods)
// const copyCar = structuredClone(car); -> Don't work with methods as well
// const copyCar = { ...car }; -> Spread operators, teachers favourite method -> if you don't have any functions (methods)

var copyCar = JSON.parse(JSON.stringify(car)); // BUTTONS FUNCTION TIPS

function CE(tagName, textContent, className, idName, icon) {
  var el = document.createElement(tagName);
  el.textContent = textContent;

  if (className) {
    el.classList.add(className);
  }

  if (idName) {
    el.setAttribute("id", idName);
  }

  if (icon) {
    el.appendChild(icon);
  }

  return el;
}

var button = CE("button", "select", "select_btn");