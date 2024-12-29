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
}); // Get user age function

var resultButton = document.getElementById("age_submit");

function getUserAge() {
  var age = parseInt(document.getElementById("age_input").value);

  if (isNaN(age) || age < 0) {
    document.getElementById("age_group").textContent = "Invalid age";
    console.log("Invalid age");
    return;
  }

  switch (true) {
    case age >= 0 && age <= 11:
      document.getElementById("age_group").textContent = "You're a child";
      console.log("You're a child");
      break;

    case age >= 12 && age <= 17:
      document.getElementById("age_group").textContent = "You're a teenager";
      console.log("Teenager");
      break;

    case age >= 18 && age <= 59:
      document.getElementById("age_group").textContent = "You're an adult";
      console.log("Adult");
      break;

    case age >= 60:
      document.getElementById("age_group").textContent = "You're a pensioner";
      console.log("Pensioner");
      break;

    default:
      document.getElementById("age_group").textContent = "Invalid age";
      console.log("Invalid age");
  }
}

resultButton.addEventListener("click", getUserAge);
var specialCharElement = document.getElementById("char_result");
var zeroBtn = document.getElementById("zero");
var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");

function getSpecialCharacter(number) {
  switch (true) {
    case number == "0":
      specialCharElement.textContent = "=";
      break;

    case number == "1":
      specialCharElement.textContent = "!";
      break;

    case number == "2":
      specialCharElement.textContent = "@";
      break;

    case number == "3":
      specialCharElement.textContent = "#";
      break;

    case number == "4":
      specialCharElement.textContent = "$";
      break;

    case number == "5":
      specialCharElement.textContent = "%";
      break;

    case number == "6":
      specialCharElement.textContent = "&";
      break;

    case number == "7":
      specialCharElement.textContent = "/";
      break;

    case number == "8":
      specialCharElement.textContent = "(";
      break;

    case number == "9":
      specialCharElement.textContent = ")";
      break;

    default:
      break;
  }
}

zeroBtn.addEventListener("click", function () {
  return getSpecialCharacter("0");
});
oneBtn.addEventListener("click", function () {
  return getSpecialCharacter("1");
});
twoBtn.addEventListener("click", function () {
  return getSpecialCharacter("2");
});
threeBtn.addEventListener("click", function () {
  return getSpecialCharacter("3");
});
fourBtn.addEventListener("click", function () {
  return getSpecialCharacter("4");
});
fiveBtn.addEventListener("click", function () {
  return getSpecialCharacter("5");
});
sixBtn.addEventListener("click", function () {
  return getSpecialCharacter("6");
});
sevenBtn.addEventListener("click", function () {
  return getSpecialCharacter("7");
});
eightBtn.addEventListener("click", function () {
  return getSpecialCharacter("8");
});
nineBtn.addEventListener("click", function () {
  return getSpecialCharacter("9");
});