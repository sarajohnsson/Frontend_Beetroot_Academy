document.getElementById("numberSubmit").onclick = function () {
    let firstNum = parseInt(document.getElementById("firstNumber").value);
    let secondNum = parseInt(document.getElementById("secondNumber").value);
    let thirdNum = parseInt(document.getElementById("thirdNumber").value);

    if (firstNum === secondNum && secondNum === thirdNum) {
        document.getElementById(
            "numberOutput"
        ).textContent = `All numbers are identical`;
    } else if (firstNum === secondNum) {
        document.getElementById(
            "numberOutput"
        ).textContent = `First and second number are identical`;
    } else if (secondNum === thirdNum) {
        document.getElementById(
            "numberOutput"
        ).textContent = `Second and third number are identical`;
    } else if (firstNum === thirdNum) {
        document.getElementById(
            "numberOutput"
        ).textContent = `First and third number are identical`;
    } else {
        document.getElementById(
            "numberOutput"
        ).textContent = `No numbers are identical`;
    }
};

document.getElementById("currencySubmit").onclick = function () {
    let currency = document.getElementById("currencyInput").value;
    let val = document.getElementById("valueInput").value;

    if (currency === "EUR") {
        const eurExRate = parseInt(val * 0.95);

        document.getElementById(
            "exchangeOutput"
        ).textContent = `${eurExRate} EUR`;
    } else if (currency === "SEK") {
        const sekExRate = parseInt(val * 10.97);
        document.getElementById(
            "exchangeOutput"
        ).textContent = `${sekExRate} SEK`;
    } else if (currency === "AUD") {
        const audExRate = parseInt(val * 1.57);
        document.getElementById(
            "exchangeOutput"
        ).textContent = `${audExRate} AUD`;
    } else {
        document.getElementById(
            "exchangeOutput"
        ).textContent = `Pick either one of these currencies EUR, SEK or AUD`;
    }
};

document.getElementById("dateSubmit").onclick = function () {
    // if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    //     return true;
    // }
};
