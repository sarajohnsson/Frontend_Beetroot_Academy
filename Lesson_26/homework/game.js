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

// Get user age function
const resultButton = document.getElementById("age_submit");

function getUserAge() {
    let age = parseInt(document.getElementById("age_input").value);

    if (isNaN(age) || age < 0) {
        document.getElementById("age_group").textContent = `Invalid age`;
        console.log("Invalid age");
        return;
    }

    switch (true) {
        case age >= 0 && age <= 11:
            document.getElementById("age_group").textContent = `You're a child`;
            console.log("You're a child");
            break;
        case age >= 12 && age <= 17:
            document.getElementById(
                "age_group"
            ).textContent = `You're a teenager`;
            console.log("Teenager");
            break;
        case age >= 18 && age <= 59:
            document.getElementById(
                "age_group"
            ).textContent = `You're an adult`;
            console.log("Adult");
            break;
        case age >= 60:
            document.getElementById(
                "age_group"
            ).textContent = `You're a pensioner`;
            console.log("Pensioner");
            break;
        default:
            document.getElementById("age_group").textContent = `Invalid age`;
            console.log("Invalid age");
    }
}

resultButton.addEventListener("click", getUserAge);

const specialCharElement = document.getElementById("char_result");
const zeroBtn = document.getElementById("zero");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");

function getSpecialCharacter(number) {
    switch (true) {
        case number == "0":
            specialCharElement.textContent = `=`;
            break;
        case number == "1":
            specialCharElement.textContent = `!`;
            break;
        case number == "2":
            specialCharElement.textContent = `@`;
            break;
        case number == "3":
            specialCharElement.textContent = `#`;
            break;
        case number == "4":
            specialCharElement.textContent = `$`;
            break;
        case number == "5":
            specialCharElement.textContent = `%`;
            break;
        case number == "6":
            specialCharElement.textContent = `&`;
            break;
        case number == "7":
            specialCharElement.textContent = `/`;
            break;
        case number == "8":
            specialCharElement.textContent = `(`;
            break;
        case number == "9":
            specialCharElement.textContent = `)`;
            break;

        default:
            break;
    }
}

zeroBtn.addEventListener("click", () => getSpecialCharacter("0"));
oneBtn.addEventListener("click", () => getSpecialCharacter("1"));
twoBtn.addEventListener("click", () => getSpecialCharacter("2"));
threeBtn.addEventListener("click", () => getSpecialCharacter("3"));
fourBtn.addEventListener("click", () => getSpecialCharacter("4"));
fiveBtn.addEventListener("click", () => getSpecialCharacter("5"));
sixBtn.addEventListener("click", () => getSpecialCharacter("6"));
sevenBtn.addEventListener("click", () => getSpecialCharacter("7"));
eightBtn.addEventListener("click", () => getSpecialCharacter("8"));
nineBtn.addEventListener("click", () => getSpecialCharacter("9"));
