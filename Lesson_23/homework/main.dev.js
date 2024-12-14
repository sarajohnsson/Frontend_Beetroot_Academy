"use strict";

document.getElementById("numberSubmit").onclick = function () {
  var firstNum = parseInt(document.getElementById("firstNumber").value);
  var secondNum = parseInt(document.getElementById("secondNumber").value);
  var thirdNum = parseInt(document.getElementById("thirdNumber").value);

  if (firstNum === secondNum && secondNum === thirdNum) {
    document.getElementById("numberOutput").textContent = "All numbers are identical";
  } else if (firstNum === secondNum) {
    document.getElementById("numberOutput").textContent = "First and second number are identical";
  } else if (secondNum === thirdNum) {
    document.getElementById("numberOutput").textContent = "Second and third number are identical";
  } else if (firstNum === thirdNum) {
    document.getElementById("numberOutput").textContent = "First and third number are identical";
  } else {
    document.getElementById("numberOutput").textContent = "No numbers are identical";
  }
};

document.getElementById("currencySubmit").onclick = function () {
  var currency = document.getElementById("currencyInput").value;
  var val = document.getElementById("valueInput").value;

  if (currency === "EUR") {
    var eurExRate = parseInt(val * 0.95);
    document.getElementById("exchangeOutput").textContent = "".concat(eurExRate, " EUR");
  } else if (currency === "SEK") {
    var sekExRate = parseInt(val * 10.97);
    document.getElementById("exchangeOutput").textContent = "".concat(sekExRate, " SEK");
  } else if (currency === "AUD") {
    var audExRate = parseInt(val * 1.57);
    document.getElementById("exchangeOutput").textContent = "".concat(audExRate, " AUD");
  } else {
    document.getElementById("exchangeOutput").textContent = "Pick either one of these currencies EUR, SEK or AUD";
  }
};