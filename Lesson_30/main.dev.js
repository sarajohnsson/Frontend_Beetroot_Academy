"use strict";

// If someone asks you. JavaScript is fully syncronous.
// JavaScript enginge will execute line by line from top to bottom.
// JS code is executed syncronously by default.
// Allows us to perform timeconsuming operations in the background without interuption.
// const getUser = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "John Doe" });
//         }, 3000);
//     });
//     // setTimeout(() => {
//     //     return { id: 1, name: "John Doe" };
//     // }, 3000);
// };
// async/await
// Await can only be used on an async element, they work together. Async means that the function will work in the background
// Await works only with promises, it's a react to change state of the promise
// const fetchUser = async () => {
//     console.log("Start fetching");
//     const user = await getUser();
//     console.log("User: ", user);
// };
// fetchUser();
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// Back in the days callbacks were used but now we use Promise
// Callback hell, can be created when you have a lot of complex code.
// const getUser = (callback) => {
//     setTimeout(() => {
//         callback({ id: 1, name: "John Doe" });
//     }, 3000);
// };
// const fetchUser = () => {
//     console.log("Start fetching");
//     getUser(console.log);
// };
// fetchUser();
// Priomises are object that represent completions or failures of these operations
var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "data.json");
xhr.send(); // If you have 400 you need to double check your code. It means you have done something wrong.
// 404 can be you or a backend
// 500 server doesn't work. It's not on you.
// Methods
// GET - get information from server
// POST - send data to server
// PUT - create new recource or replace a representation
// DELETE - delete
// Depending on what action you want to use with the server, use proper method
// Under the hood, use promise. Instead of writing async and await we can use then
// fetch("data.json")
//     .then((res) => {
//         return res.json();
//         // console.log(res);
//     })
//     .then((response) => {
//         console.log(response);
//     });
// To get info from server the backend should provide ou with an API. A way to connect server with computer

fetch("https://jsonplaceholder.typicode.com/posts").then(function (res) {
  return res.json(); // console.log(res);
}).then(function (response) {
  console.log(response);
}); // You can also use axios. Standard for big application, easier to set up and control
// DOM & BOM - Document Object Model and Browser Object Model (ex. alert, prompt etc)
// How it looks

var DOM = {
  document: {
    children: [{
      tadName: "body",
      children: [{
        tagName: "div"
      }]
    }]
  }
}; // get info about el
// set/get/remove attributes
// set inner content
// create new elements
// delete elements
// insert one el into another
// Legacy below
// getElementById
// getElementByClassName
// getElementByTagName
// Homework, create a weather app