//  $ -> jQuery
// $(".selector").someMethod();

// $ vs document.querySelector
const myEl = $(".my_el");
// const myEl1 = document.querySelector(".my_el");

// console.log(myEl[0]);

// .text vs .textContent
// myEl.text("Hello");

// .html vs .innerHTML
myEl.html("<h1>Hello!!!</h1>");

// .val vs .value
// $(".my_input").val(); // to get the value
// $(".my_input").val("New value"); // to set the value

// Manipulating css with jquery is much better in Alex opinion

// Main advantage, we can make a chain
// myEl.css("color", "red");
// myEl.css("color", "red").css("font-size", "25px");

// myEl.addClass("new_class");
// myEl.removeClass("new_class");

// Click is depricated
// .on vs .document.addEventListener
myEl.on("click", function () {
    alert(123);
});

// myEl.remove();

// Methods to hide and show elements easily
// For now there's no such feature in javascript
// myEl.hide();
// myEl.show();

myEl.css("color", "blue").slideUp(1000).slideDown(1000);

// $.ajax({
//     url: "",
//     method: "GET",
//     success: function () {},
//     error: function () {},
// });

// We need to be sure that the elements we work with already exists in html

document.addEventListener("DOMContentLoaded", () => {
    // Do something here that will show instantly
});

$(document).ready(function () {
    // Recommended to write all your code like this
    // It works like a wrapper
});
