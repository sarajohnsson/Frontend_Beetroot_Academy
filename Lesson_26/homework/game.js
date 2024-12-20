let minValue = 0;
let maxValue = 100;
let guess = Math.floor((minValue + maxValue) / 2);
let attempts = 0;

// HTML reference
const guessElement = document.getElementById("display");
const resultElement = document.getElementById("result");
const lessThanBtn = document.getElementById("lessThan");
const equalBtn = document.getElementById("equal");
const greaterThanBtn = document.getElementById("greaterThan");

guessElement.textContent = `Is your number > ${guess}, < ${guess}, or == ${guess}?`;

function updateGuessTheNumber(answer) {
    if (answer === ">") {
        minValue = guess + 1;
    } else if (answer === "<") {
        maxValue = guess - 1;
    } else if (answer === "==") {
        resultElement.textContent = `Your number is ${guess} in ${attempts} attempts`;
    }

    guess = Math.floor((minValue + maxValue) / 2);
    attempts++;

    if (minValue > maxValue) {
        resultElement.textContent = `Invalid response, please try again!`;
        return;
    }

    guessElement.textContent = `Is you number ${guess}?`;
}

lessThanBtn.addEventListener("click", () => updateGuessTheNumber("<"));
equalBtn.addEventListener("click", () => updateGuessTheNumber("=="));
greaterThanBtn.addEventListener("click", () => updateGuessTheNumber(">"));
