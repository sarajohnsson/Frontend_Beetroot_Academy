"use strict";

// SHOPPING CART
// Create an array with some products
// Create a function that displays the product on a receipt
// Create a function that shows the total purchase cost
// Create a function that finds the most expensive object
// Create a function that calculates the average price
var products = [{
  name: "Banana",
  image: "./assets/banana.jpg",
  amount: 3,
  pricePerItem: 24.95
}, {
  name: "Papaya",
  image: "./assets/papaya.jpg",
  amount: 1,
  pricePerItem: 52.95
}, {
  name: "Avocado",
  image: "./assets/avocado.jpg",
  amount: 2,
  pricePerItem: 12.95
}, {
  name: "Strawberries",
  image: "./assets/strawberry.jpg",
  amount: 6,
  pricePerItem: 69.95
}, {
  name: "Melon",
  image: "./assets/melon.jpg",
  amount: 1,
  pricePerItem: 43.95
}, {
  name: "Cherry",
  image: "./assets/cherry.jpg",
  amount: 3,
  pricePerItem: 23.95
}, {
  name: "Apple",
  image: "./assets/apple.jpg",
  amount: 4,
  pricePerItem: 32.95
}, {
  name: "Blueberry",
  image: "./assets/blueberry.jpg",
  amount: 7,
  pricePerItem: 29.95
}];
var productContainer = document.getElementById("product_cards");

function displayProducts() {
  productContainer.innerHTML = "";
  products.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.classList.add("product_list");
    listItem.innerHTML = "\n            <div class=\"product\">\n                <div class=\"product_info\">\n                    <h3>".concat(item.name, "</h3>\n                    <p>Qty: ").concat(item.amount, "</p>\n                    <p>Price: ").concat(item.pricePerItem.toFixed(2), " SEK</p>\n                </div>\n                <img src=\"").concat(item.image, "\" alt=\"").concat(item.name, "\" />\n            </div>\n        ");
    productContainer.appendChild(listItem);
  });
  displayCalculations();
}

function displayCalculations() {
  // Calculate total cost
  var initialValue = 0;
  var totalCost = products.reduce(function (total, item) {
    return total + item.pricePerItem * item.amount;
  }, initialValue); // Calculate average price

  var totalAmount = products.reduce(function (total, item) {
    return total + item.amount;
  }, initialValue);
  var averageCost = totalCost / totalAmount;
  document.getElementById("total_cost").textContent = "".concat(totalCost.toFixed(2), " SEK");
  document.getElementById("average_price").textContent = "".concat(averageCost.toFixed(2), " SEK"); // Find the most expensive item

  var maxValue = 0;
  var values = Object.values(products);
  values.map(function (item) {
    var valueFromObject = item.pricePerItem;
    maxValue = Math.max(maxValue, valueFromObject);
  });
  document.getElementById("most_expensive").textContent = "".concat(maxValue.toFixed(2), " SEK");
}

displayProducts(); // Add function to add/remove amount of items with + or - button