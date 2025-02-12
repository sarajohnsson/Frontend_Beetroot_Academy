"use strict";

// Take user input and save into a variable
// Tip - average service 15%, above average 20%
var billAmountInput = document.querySelector('.restaurantBill');
var submitAverageButton = document.querySelector('.averageButton');
var submitAboveAverageButton = document.querySelector('.aboveAverageButton');
var result = document.querySelector('.resultContainer');

function calculateTip(percentage) {
  var billAmount = parseFloat(billAmountInput.value);

  if (isNaN(billAmount) || billAmount <= 0) {
    result.textContent = "Please type a valid bill amount";
  } // 1.2 * billAmount => 20/100 = 0.2
  // 1.15 * billAmount => 15/100 = 0.15


  var tipAmount = billAmount * (percentage / 100);
  var totalAmount = tipAmount + billAmount;
  result.textContent = "Tip: ".concat(tipAmount.toFixed(2), ", total: ").concat(totalAmount.toFixed(2));
}