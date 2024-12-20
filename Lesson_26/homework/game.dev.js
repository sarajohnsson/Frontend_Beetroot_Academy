"use strict";

var minValue = 0;
var maxValue = 100;
var guess = Math.floor((minValue + maxValue) / 2);
var attempts = 0; // HTML reference

var guessElement = document.getElementById("display");
var resultElement = document.getElementById("result");
var lessThanBtn = document.getElementById("lessThan");
var equalBtn = document.getElementById("equal");
var greaterThanBtn = document.getElementById("greaterThan");
guessElement.textContent = "Is your number > ".concat(guess, ", < ").concat(guess, ", or == ").concat(guess, "?");

function updateGuessTheNumber(answer) {
  if (answer === ">") {
    minValue = guess + 1;
  } else if (answer === "<") {
    maxValue = guess - 1;
  } else if (answer === "==") {
    resultElement.textContent = "Your number is ".concat(guess, " in ").concat(attempts, " attempts");
  }

  guess = Math.floor((minValue + maxValue) / 2);
  attempts++;

  if (minValue > maxValue) {
    resultElement.textContent = "Invalid response, please try again!";
    return;
  }

  guessElement.textContent = "Is you number ".concat(guess, "?");
}

lessThanBtn.addEventListener("click", function () {
  return updateGuessTheNumber("<");
});
equalBtn.addEventListener("click", function () {
  return updateGuessTheNumber("==");
});
greaterThanBtn.addEventListener("click", function () {
  return updateGuessTheNumber(">");
});