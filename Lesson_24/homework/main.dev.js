"use strict";

// const firstNum = +prompt("Enter first num: ");
// const operator = prompt("Choose an operator");
// const secondNum = +prompt("Enter second num: ");
// switch (operator) {
//     case "+":
//         console.log(firstNum + secondNum);
//         break;
//     case "-":
//         console.log(firstNum - secondNum);
//         break;
//     case "*":
//         console.log(firstNum * secondNum);
//         break;
//     case "/":
//         console.log(firstNum / secondNum);
//         break;
//     default:
//         console.log("Bad expression");
//         break;
// }
document.getElementById("calculate").onclick = function () {
  var num1 = parseFloat(document.getElementById("first_input").value);
  var operator = document.getElementById("operator_input").value;
  var num2 = parseFloat(document.getElementById("second_input").value);

  if (!num1) {
    document.getElementById("total_output").textContent = "Please add the first number";
  } else if (!num2) {
    document.getElementById("total_output").textContent = "Please add the second number";
  } else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
    document.getElementById("total_output").textContent = "Please select an operator";
  }

  switch (operator) {
    case "+":
      document.getElementById("total_output").textContent = "".concat(num1 + num2);
      console.log(num1 + num2);
      break;

    case "-":
      document.getElementById("total_output").textContent = "".concat(num1 - num2);
      console.log(num1 - num2);
      break;

    case "*":
      document.getElementById("total_output").textContent = "".concat(num1 * num2);
      console.log(num1 * num2);
      break;

    case "/":
      document.getElementById("total_output").textContent = "".concat(num1 / num2);
      console.log(num1 / num2);
      break;

    default:
      document.getElementById("total_output").textContent = "Nothing to calculate";
      console.log("Bad expression");
      break;
  }
}; // Reverse number


document.getElementById("result").onclick = function () {
  var n = parseInt(document.getElementById("user_input").value);
  var num1 = parseInt(n / 100);
  var num2 = parseInt(n % 100 / 10);
  var num3 = parseInt(n % 10);
  reverseNum = 100 * num3 + 10 * num2 + num1; // toString(num3) + toString(num2) + toString(num1);

  document.getElementById("output").textContent = "".concat(reverseNum);
};