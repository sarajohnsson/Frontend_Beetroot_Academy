"use strict";

// 1 - Request a user’s name and display the response “Hello, [name]”.
// const userName = prompt("What is your name ?");
// alert("Hello " + userName);
var userName;

document.getElementById("nameSubmit").onclick = function () {
  userName = document.getElementById("nameText").value;
  document.getElementById("nameOutput").textContent = "Hello ".concat(userName, "!");
  console.log(userName);
}; // 2 - Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
// const yearOfBirth = prompt("What year were you born? Including millenia");
// alert(
//     "You were born in " +
//         yearOfBirth +
//         " and are " +
//         (2024 - yearOfBirth) +
//         " years old"
// );


var yearOfBirth;

document.getElementById("birthSubmit").onclick = function () {
  yearOfBirth = document.getElementById("birthText").value;
  document.getElementById("birthOutput").textContent = "You were born in ".concat(yearOfBirth, " and are ").concat(parseInt(2024 - yearOfBirth), " years old");
  console.log(yearOfBirth);
}; // 3 - Request a length of a side of a square from a user and display the perimeter of the square.
// const squareLength = prompt("Please provide a length of a square in meter");
// alert("The area is " + squareLength * squareLength + " m");


var squareLength;

document.getElementById("lengthSubmit").onclick = function () {
  squareLength = document.getElementById("lengthText").value;
  document.getElementById("lengthOutput").textContent = "The area is ".concat(parseInt(squareLength * squareLength), " m");
}; // 4 - Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
// const distanceBetween = parseInt(
//     prompt("Please provide a distance in km between two cities")
// );
// const timeToDrive = parseInt(
//     prompt("How long do you want the drive to take in hours?")
// );
// alert("You need to drive at " + distanceBetween / timeToDrive + " km/h");


var distanceBetween;
var timeToDrive;

document.getElementById("driveSpeedSubmit").onclick = function () {
  distanceBetween = document.getElementById("cityDistanceText").value;
  timeToDrive = document.getElementById("driveTimeText").value;
  document.getElementById("driveSpeedOutput").textContent = "You need to drive at ".concat(parseInt(distanceBetween / timeToDrive), " km/h");
}; // 5 - A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.
// const storage = parseInt(prompt("State a flash drive memory in GB"));
// alert(
//     "You can store an amount of " +
//         (storage * 1000) / 820 +
//         " files with the size of 820 MB in this drive"
// );


var storageGB;

document.getElementById("memorySubmit").onclick = function () {
  storageGB = document.getElementById("memoryText").value;
  document.getElementById("memoryOutput").textContent = "You can store ".concat(parseInt(storageGB * 1000 / 820), " files in this drive");
}; // 6 - A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
// const currentAmount = parseInt(
//     prompt("Please type the amount of money in your wallet")
// );
// const chocolateBarPrice = parseInt(
//     prompt("Please provide the price of the cholocate bar")
// );
// const chocolateBarAmount = Math.floor(currentAmount / chocolateBarPrice);
// const newAmount = currentAmount - chocolateBarAmount * chocolateBarPrice;
// alert(
//     "You will be able to buy " +
//         chocolateBarAmount +
//         " chocolate bars and have " +
//         newAmount +
//         " kr left"
// );
// let currentAmount;
// let chocolateBarPrice;


document.getElementById("chocolateSubmit").onclick = function () {
  var currentAmount = document.getElementById("moneyText").value;
  var chocolateBarPrice = document.getElementById("priceText").value;
  var chocolateBarAmount = Math.floor(currentAmount / chocolateBarPrice);
  var newAmount = currentAmount - chocolateBarAmount * chocolateBarPrice;
  document.getElementById("chocolateOutput").textContent = "You'll be able to buy ".concat(parseInt(chocolateBarAmount), " chocolate bars and have ").concat(parseInt(newAmount), " kr left");
}; // 7 - The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest
// const bankDeposit = parseInt(
//     prompt(
//         "Please type in a sum of bank deposit for 2 month to calculate a yearly interest rate of 5%"
//     )
// );
// const yearlyAmount = (bankDeposit / 2) * 12;
// const interestRate = (bankDeposit / 2) * 12 * 1.05;
// const sumOfInterest = interestRate - yearlyAmount;
// alert("The sum of interest will be " + sumOfInterest + " kr");


var bankDeposit;

document.getElementById("interestSubmit").onclick = function () {
  bankDeposit = document.getElementById("interestText").value;
  document.getElementById("interestOutput").textContent = "The yearly interest sum will be ".concat(parseInt(bankDeposit / 2 * 12 * 1.05 - bankDeposit / 2 * 12), " kr");
};