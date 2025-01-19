const productCart = [
    {
        propductName: "potato",
        price: 12,
        isDiscounted: true,
    },
    {
        propductName: "tomato",
        price: 8,
        isDiscounted: true,
    },
    {
        propductName: "wine",
        price: 80,
        isDiscounted: false,
    },
    {
        propductName: "meat",
        price: 40,
        isDiscounted: false,
    },
];

// Trying to avoid duplication of code. Takes upp unnecessary memory.

// This is not recommended, as you want to separate your javascript from your html
// function clickHandler(event) {
//     console.log(event.target);
// }

// isTrusted -> read-only property
// clientX, clientY -> position of the mouse on click
// offsetX, offsetY -> position of scroll
// target -> reference to the element when clicked

// document.querySelector(".button").onclick = clickHandler();

// document.querySelector(".button").addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });

// document.querySelector(".button").addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log(this);
// });

// Anchor has default behavior as well as forms. Sometimes we want to disable the defauöt behaviour.

// Usally you want to simulate focus.
// Event target will be the most required one as it will get information from html element.

// Try to avoid overlapping on events -> bubbles. Can be checked in inspector event listeners
// function clickHandler(event) {
//     console.log(event.target);
// }

// document.querySelector(".container").addEventListener("click", clickHandler);
// document.querySelector(".box").addEventListener("click", clickHandler);
// document.querySelector(".button").addEventListener("click", clickHandler);

// document.querySelector(".container").addEventListener("click", () => {
//     console.log("container");
// });
// document.querySelector(".box").addEventListener("click", () => {
//     console.log("box");
// });
// document.querySelector(".button").addEventListener("click", () => {
//     // What stop propagation is and what prevent default is, popular technical question.
//     event.stopPropagation();
//     console.log("button");
// });

// Another way of adding event listeners
// document.addEventListener("click", (event) => {
//     // JS event delegation. Popular technique
//     if (event.target.tagName === "BUTTON") {
//         console.log("Button!!");
//     }

//     if (event.target.className === "container") {
//         console.log("Container");
//     }
// });

// document.querySelector(".button").addEventListener("mouseleave", () => {
//     console.log("button");
// });

// Mouse events are legacy, only works with mouse. For mobile or tablet, pointer events. Works for all devices. Just replace mouse with pointer

// document.querySelector(".button").addEventListener("pointerenter", () => {
//     console.log("button");
// });

// Usually preventDefault is always needed

// Drag and drop

// Submit event only works with forms
// document.querySelector(".my-form").addEventListener("submit", (event) => {
//     event.preventDefault();
// });

// document.querySelector(".my-input").addEventListener("focus", (event) => {
//     // event.preventDefault();
//     console.log(event);
// });

// document.querySelector(".my-input").addEventListener("input", function (event) {
//     // event.preventDefault();
//     console.log(this.value);
// });

// Form validation
// document.querySelector(".my-form").addEventListener("submit", () => {

// })

document
    .querySelector('input[name="userName"]')
    .addEventListener("input", () => {
        const diff = 5 - this.value.length;

        if (diff <= 0) {
            document.querySelector(".error_block").classList.add("hidden");
            return false;
        }

        document.querySelector(".counter").textContent = diff;
        document.querySelector(".error_block").classList.remove("hidden");
    });

document
    .querySelector('input[name="userEmail"]')
    .addEventListener("input", () => {
        const diff = 5 - this.value.length;

        if (this.value.includes("@") && this.value.length >= 5) {
            document
                .querySelector(".email_error_block")
                .classList.add("hidden");
            return false;
        }

        document.querySelector(".email_error_block").classList.remove("hidden");
    });

// Not recommended to rely on code and key. Rely on keyCode, it will always be the same

// This is the order the keypress function
// Keydown
// Keypress -> Replace this with keydown, before browser does stuff
// Keypress

document.addEventListener("keydown", (event) => {
    event.preventDefault();
    console.log(event);
});

// Cursor position at drag start and compare cursor position at drag end. Probably position fixed or absolute
