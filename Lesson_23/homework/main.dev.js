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

document.getElementById("dateSubmit").onclick = function () {
  var day = parseInt(document.getElementById("dayInput").value);
  var month = parseInt(document.getElementById("monthInput").value);
  var year = parseInt(document.getElementById("yearInput").value);
  day++;

  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    if (day > 31) {
      day = 1;
      month += 1;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day > 30) {
      day = 1;
      month += 1;
    }
  } else if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month += 1;
      }
    } else {
      if (day > 28) {
        day = 1;
        month += 1;
      }
    }
  }

  if (month > 12) {
    month = 1;
    year += 1;
  }

  function isLeapYear(year) {
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
      console.log("It's a leap year");
    }
  }

  var nextDate = "".concat(String(day).padStart(2, "0"), ":").concat(String(month).padStart(2, "0"), ":").concat(String(year).padStart(2, "0"));
  document.getElementById("dateOutput").textContent = "The next date is: ".concat(nextDate);
  console.log(nextDate);
};