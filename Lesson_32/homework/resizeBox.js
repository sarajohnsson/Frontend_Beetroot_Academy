const divElement = document.querySelector(".box");
const resizersElement = document.querySelectorAll(".resizer_container_corner");

function makeResizable() {
    for (let i = 0; i < resizersElement.length; i++) {
        const currentResizer = resizersElement[i];

        currentResizer.addEventListener("mousedown", (event) => {
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
    }
}

function resize(event, currentResizer) {
    const rect = divElement.getBoundingClientRect();
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
