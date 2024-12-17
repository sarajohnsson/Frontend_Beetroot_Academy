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
    let num1 = parseFloat(document.getElementById("first_input").value);
    let operator = document.getElementById("operator_input").value;
    let num2 = parseFloat(document.getElementById("second_input").value);

    while (!num1) {
        document.getElementById(
            "totalOutput"
        ).textContent = `Please add a number`;
        console.log("Error");
        break;
    }

    // while (!num2) {
    //     document.getElementById(
    //         "totalOutput"
    //     ).textContent = `Please add a number`;
    //     console.log("Error");
    // }

    // while (
    //     operator !== "+" &&
    //     operator !== "-" &&
    //     operator !== "*" &&
    //     operator !== "/"
    // ) {
    //     document.getElementById(
    //         "totalOutput"
    //     ).textContent = `Please select an operator`;
    //     console.log("Error");
    // }

    switch (operator) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;

        default:
            console.log("Bad expression");
            break;
    }
};
