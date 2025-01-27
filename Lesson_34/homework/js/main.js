const tabs = [...document.querySelectorAll(".tabs")];
const contents = [...document.querySelectorAll(".content")];

tabs.forEach((tab) => tab.addEventListener("click", handleTabs));

let index = 0;

function handleTabs(event) {
    const currentElement = event.target.closest(".tabs");

    if (!currentElement) {
        console.log("Clicked element is not a tab");
        return;
    }

    const newIndex = tabs.indexOf(currentElement);

    if (newIndex === -1) {
        console.log("Clicked element is not a tab");
        return;
    }

    if (newIndex === index) {
        console.log("Same tab clicked again. Ignoring");
        return;
    }

    if (index >= 0 && index < tabs.length) {
        tabs[index].classList.remove("active");
        contents[index].classList.remove("active_content");
    }

    index = newIndex;

    if (index >= 0 && index < tabs.length) {
        tabs[index].classList.add("active");
        contents[index].classList.add("active_content");
    }
}
