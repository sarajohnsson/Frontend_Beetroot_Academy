"use strict";

var divElement = document.querySelector(".box");
var resizersElement = document.querySelectorAll(".resizer_container_corner");

function makeResizable() {
  var _loop = function _loop(i) {
    var currentResizer = resizersElement[i];
    currentResizer.addEventListener("mousedown", function (event) {
      event.preventDefault();

      function onMouseMove(event) {
        resize(event, currentResizer);
      }

      function onMouseUp() {
        stopResize(onMouseMove, onMouseUp);
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    });
  };

  for (var i = 0; i < resizersElement.length; i++) {
    _loop(i);
  }
}

function resize(event, currentResizer) {
  var rect = divElement.getBoundingClientRect();

  if (currentResizer.classList.contains("bottom_right")) {
    divElement.style.width = event.clientX - rect.left + "px";
    divElement.style.height = event.clientY - rect.top + "px";
  }
}

function stopResize(onMouseMove, onMouseUp) {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
}

makeResizable();