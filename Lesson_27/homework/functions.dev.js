"use strict";

// Nr 1
// Function declaration
function myFunctionDeclaration() {
  console.log("Function declaration");
}

myFunctionDeclaration(); // Function expression

var myFunctionExpression = function myFunctionExpression() {
  console.log("Function expression");
};

myFunctionExpression(); // Arrow function

var myArrowFunction = function myArrowFunction() {
  console.log("Arrow function");
};

myArrowFunction(); // IIFE - immediately invoked function expression

(function myImmediatelyInvokedFunction() {
  console.log("IIFE");
})(); // Nr 2


function printArguments() {
  var argumentsNum = arguments.length;
  console.log("Number of arguments passed: ".concat(argumentsNum));
}

printArguments(1, 2, 3); // Nr 3

var compareBtn = document.getElementById("submit_comparison");

function compareNumber() {
  var firstNum = parseInt(document.getElementById("first_input").value);
  var secondNum = parseInt(document.getElementById("second_input").value);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    return "Not a valid number";
  } else if (firstNum < secondNum) {
    return "-1";
  } else if (firstNum > secondNum) {
    return "1";
  } else if (firstNum === secondNum) {
    return "0";
  }
}

function displayResult() {
  var result = compareNumber();
  document.getElementById("comparison_result").textContent = result;
}

compareBtn.addEventListener("click", displayResult); // Nr 4

var combineBtn = document.getElementById("submit_combination");

function combineNumber() {
  var firstDigit = parseInt(document.getElementById("first_digit").value);
  var secondDigit = parseInt(document.getElementById("second_digit").value);
  var thirdDigit = parseInt(document.getElementById("third_digit").value);

  if (isNaN(firstDigit) || isNaN(secondDigit) || isNaN(thirdDigit)) {
    document.getElementById("combination_result").textContent = "This is not a number. Please type a number";
  } else {
    document.getElementById("combination_result").textContent = "".concat(firstDigit).concat(secondDigit).concat(thirdDigit);
  }
}

combineBtn.addEventListener("click", combineNumber); // Nr 5

var calculateBtn = document.getElementById("submit_area");

function caclulateArea() {
  var sideA = parseInt(document.getElementById("side_a").value);
  var sideB = parseInt(document.getElementById("side_b").value);

  if (isNaN(sideA) && isNaN(sideB)) {
    return "Please type a number in at least one input.";
  } else if (!isNaN(sideA) && isNaN(sideB)) {
    return sideA * sideA;
  } else if (isNaN(sideA) && !isNaN(sideB)) {
    return sideB * sideB;
  } else {
    return sideA * sideB;
  }
}

function displayAreaResult() {
  var areaResult = caclulateArea();
  document.getElementById("area_result").textContent = areaResult;
}

calculateBtn.addEventListener("click", displayAreaResult);