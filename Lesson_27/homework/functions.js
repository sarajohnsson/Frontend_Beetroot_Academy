// Nr 1

// Function declaration
function myFunctionDeclaration() {
    console.log("Function declaration");
}

myFunctionDeclaration();

// Function expression
const myFunctionExpression = function () {
    console.log("Function expression");
};

myFunctionExpression();

// Arrow function
const myArrowFunction = () => {
    console.log("Arrow function");
};

myArrowFunction();

// IIFE - immediately invoked function expression
(function myImmediatelyInvokedFunction() {
    console.log("IIFE");
})();

// Nr 2

function printArguments() {
    const argumentsNum = arguments.length;
    console.log(`Number of arguments passed: ${argumentsNum}`);
}

printArguments(1, 2, 3);

// Nr 3
const compareBtn = document.getElementById("submit_comparison");

function compareNumber() {
    let firstNum = parseInt(document.getElementById("first_input").value);
    let secondNum = parseInt(document.getElementById("second_input").value);

    if (firstNum < secondNum) {
        return `-1`;
    } else if (firstNum > secondNum) {
        return `1`;
    } else if (firstNum === secondNum) {
        return `0`;
    }
}

function displayResult() {
    const result = compareNumber();

    document.getElementById("comparison_result").textContent = result;
}

compareBtn.addEventListener("click", displayResult);

// Nr 4
const combineBtn = document.getElementById("submit_combination");
function combineNumber() {
    let firstDigit = parseInt(document.getElementById("first_digit").value);
    let secondDigit = parseInt(document.getElementById("second_digit").value);
    let thirdDigit = parseInt(document.getElementById("third_digit").value);

    if (isNaN(firstDigit) || isNaN(secondDigit) || isNaN(thirdDigit)) {
        document.getElementById(
            "combination_result"
        ).textContent = `This is not a number. Please type a number`;
    } else {
        document.getElementById(
            "combination_result"
        ).textContent = `${firstDigit}${secondDigit}${thirdDigit}`;
    }
}

combineBtn.addEventListener("click", combineNumber);

// Nr 5
