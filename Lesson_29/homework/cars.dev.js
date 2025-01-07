"use strict";

// Create object that describes a car
// Method that displays car info
// Method counting time frame necessary to cover a given distance with average speed
var car = {
  manufacturer: "Ford",
  model: "Mustang GT",
  yearOfRelease: 2024,
  averageSpeed: 267
};

function displayCarInfo() {
  var carInfo = "\n    <p class=\"text\">Manufacturer: ".concat(car.manufacturer, "</p>\n    <p class=\"text\">Model: ").concat(car.model, "</p>\n    <p class=\"text\">Year of release: ").concat(car.yearOfRelease, "</p>\n    <p class=\"text\">Average speed: ").concat(car.averageSpeed, " km/h</p>\n    ");
  console.log(carInfo);
  document.getElementById("result").innerHTML = carInfo;
}

function calculateTime() {
  var distance = parseInt(document.getElementById("distance_input").value); // let distance = parseInt(prompt("Enter a distance in km"));

  if (isNaN(distance) || distance <= 0) {
    alert("Please enter a valid distance");
  }

  if (car.averageSpeed <= 0) {
    alert("Speed must be greater than 0");
    return;
  }

  var time = distance / car.averageSpeed;

  if (time >= 4) {
    var breaks = Math.floor(time / 4);
    time += breaks;
  }

  console.log("Time to cover ".concat(distance, " km: ").concat(time.toFixed(2), " hours"));
  document.getElementById("result").textContent = "Time to cover ".concat(distance, " km: ").concat(time.toFixed(2), " hours");
}