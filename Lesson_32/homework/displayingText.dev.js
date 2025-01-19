"use strict";

// Create an html-page for displaying and editing text.
// When opening the page, the text should be displayed with div tag.
// When clicking Ctrl+E, textarea appears instead of div and can be edited.
// When pressing Ctrl+S, the div with edited text appears instead of textarea.
// Don’t forget to turn off default settings for these hotkey combinations.
var targetTextbox = document.querySelector(".text_target");
var sourceTextbox = document.querySelector(".text_source"); // After pressing Ctrl+E -> hide target textbox -> display source textbox

function editText() {
  sourceTextbox.value = targetTextbox.textContent;
  sourceTextbox.focus();
  targetTextbox.classList.add("hidden");
  targetTextbox.classList.remove("visible");
  sourceTextbox.classList.remove("hidden");
  sourceTextbox.classList.add("visible");
} // After pressing Ctr+E -> hide source texbox -> display target textbox


function saveText() {
  targetTextbox.textContent = sourceTextbox.value;
  sourceTextbox.classList.add("hidden");
  sourceTextbox.classList.remove("visible");
  targetTextbox.classList.remove("hidden");
  targetTextbox.classList.add("visible");
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "e" || event.metaKey && event.key === "e") {
    event.preventDefault();
    editText();
  } else if (event.ctrlKey && event.key === "s" || event.metaKey && event.key === "s") {
    event.preventDefault();
    saveText();
  }
});