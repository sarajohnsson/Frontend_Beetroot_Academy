// Take user input and save into a variable
// Tip - average service 15%, above average 20%

const billAmountInput = document.querySelector('.restaurantBill');
const submitAverageButton = document.querySelector('.averageButton');
const submitAboveAverageButton = document.querySelector('.aboveAverageButton');
const result = document.querySelector('.resultContainer');

function calculateTip(percentage) {
    const billAmount = parseFloat(billAmountInput.value);
    if (isNaN(billAmount) || billAmount <= 0) {
        result.textContent = `Please type a valid bill amount`;
    }
    // 1.2 * billAmount => 20/100 = 0.2
    // 1.15 * billAmount => 15/100 = 0.15
    const tipAmount = billAmount * (percentage / 100);
    const totalAmount = tipAmount + billAmount;

    result.textContent = `Tip: ${tipAmount.toFixed(2)}, total: ${totalAmount.toFixed(2)}`;
}
