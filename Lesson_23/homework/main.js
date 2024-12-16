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
    let day = parseInt(document.getElementById("dayInput").value);
    let month = parseInt(document.getElementById("monthInput").value);
    let year = parseInt(document.getElementById("yearInput").value);

    day++;

    if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
    ) {
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

    const nextDate = `${String(day).padStart(2, "0")}:${String(month).padStart(
        2,
        "0"
    )}:${String(year).padStart(2, "0")}`;

    document.getElementById(
        "dateOutput"
    ).textContent = `The next date is: ${nextDate}`;

    console.log(nextDate);
};
