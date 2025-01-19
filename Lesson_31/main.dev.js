"use strict";

// getElementById
// getElementsByClassName
// getElementsByTagName
// const grid = document.getElementById("gridEl");
// Different between textcontent and inner html.
// Textcontent will only show the text content
// Inner html will show the text content and the element (ie paragraph or div etc)
// Window.scrollY -> will show scroll position vertically
// Window.scrollX -> will show scroll position horizontally
// Window.id("gridEl") can be written instead of document.getElementById
// More flexible, can rely on any CSS selectors
// querySelector
// querySelectorAll
// querySelector will only take the first element. If you want to have all elements you need to use querySelectorAll
// const grid = document.querySelectorAll("#grid");
// const grid = document.querySelectorAll(".container .grid:first-child");
// const gridOne = document.querySelectorAll(".grid");
// const gridTwo = document.getElementsByClassName("grid");
// This works with node lists but it doesn't work with html collections which getElementsByClassName gives us
// gridOne.forEach((el) => console.log(el.textContent));
// If you want to target one element the querySelector will be enough but it's important to have a specific name for that element.
var p = document.querySelector(".testParagraph"); // set/get/remove attribute: get/set/removeAttribute()
// p.setAttribute("new-attr", "hello");
// p.getAttribute();
// p.removeAttribute();
// Create new elements

var myNewButton = document.createElement("button");
myNewButton.textContent = "I'm a button!";
myNewButton.setAttribute("class", "button"); // Set inner content: innerHTML, textContent

p.append(myNewButton); // p.prepend(myNewButton);
// p.appendChild();
// Popular question. What's the difference between static and live DOM elements, and how to get it
// querySelector -> static
// getElements -> live
// If you don't want to use your regular email you can create a temporary one. 10-min email

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
}];