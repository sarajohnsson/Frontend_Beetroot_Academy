function CE(tagName, textContent, className, idName) {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    if (className) {
        const classes = className.split(" ");
        classes.forEach((cls) => {
            element.classList.add(cls);
        });
    }
    if (idName) {
        element.setAttribute("id", idName);
    }
    return element;
}

class WorldClock {
    constructor(timezone) {
        this.timezone = timezone;
        this.clockContainer = null;
        this.hoursElement = null;
        this.minutesElement = null;
        this.secondsElement = null;
        this.dateElement = null;

        this.displayClock();
        this.startClock();
    }

    displayClock() {
        this.clockContainer = CE("div", null, "clock_container");

        const counterContainer = CE("div", null, "counter_container");
        this.hoursElement = CE("div", "00", "time hidden", "hours");
        const hoursInfo = CE("span", "Hours", "hours_info hidden");
        const colon1 = CE("span", ":", "colon hidden");

        this.minutesElement = CE("div", "00", "time hidden", "minutes");
        const minutesInfo = CE("span", "Minutes", "minutes_info hidden");
        const colon2 = CE("span", ":", "colon hidden");

        this.secondsElement = CE("div", "00", "time hidden", "seconds");
        const secondsInfo = CE("span", "Seconds", "seconds_info hidden");

        counterContainer.append(
            this.hoursElement,
            hoursInfo,
            colon1,
            this.minutesElement,
            minutesInfo,
            colon2,
            this.secondsElement,
            secondsInfo
        );

        const dateContainer = CE("div", null, "date_container");
        this.dateElement = CE("div", "", "date_display hidden");
        dateContainer.appendChild(this.dateElement);

        this.getDateTimeBtn = CE("button", "Get date & time", "date_time_btn");
        this.getDateTimeBtn.onclick = () => this.toggleDateTime();

        const buttonContainer = CE("div", null, "button_container");
        this.getDateBtn = CE("button", "Get current date", "date_btn");
        this.getDateBtn.onclick = () => this.getCurrentDate();

        this.deleteButton = CE("button", "Delete clock", "delete_btn");
        this.deleteButton.onclick = () => this.deleteClock();

        buttonContainer.append(
            this.getDateBtn,
            this.getDateTimeBtn,
            this.deleteButton
        );

        this.clockContainer.append(
            counterContainer,
            dateContainer,
            buttonContainer
        );
        document
            .querySelector(".clock_dashboard")
            .appendChild(this.clockContainer);

        console.log(this.clockContainer.innerHTML);
    }

    updateTime() {
        const now = new Date();
        const options = {
            timeZone: this.timezone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        };

        const timeString = now.toLocaleTimeString("en-US", options);
        const [hours, minutes, seconds] = timeString.split(":");

        this.hoursElement.textContent = hours;
        this.minutesElement.textContent = minutes;
        this.secondsElement.textContent = seconds;
    }

    startClock() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    deleteClock() {
        this.clockContainer.remove();
    }

    getCurrentDate() {
        const now = new Date();
        const options = {
            timeZone: this.timezone,
            month: "long",
            weekday: "long",
            day: "numeric",
            year: "numeric",
        };

        const dateString = now.toLocaleDateString("en-US", options);

        this.dateElement.textContent = `${dateString}`;
        this.dateElement.classList.remove("hidden");

        console.log(!this.dateElement.classList.contains("hidden"));
    }

    toggleDateTime() {
        const toggleElements = [
            this.hoursElement,
            this.minutesElement,
            this.secondsElement,
            this.dateElement,
            ...this.clockContainer.querySelectorAll(
                ".colon, .hours_info, .minutes_info, .seconds_info"
            ),
        ];

        toggleElements.forEach((element) => element.classList.toggle("hidden"));

        if (!this.hoursElement.classList.contains("hidden")) {
            this.getCurrentDate();
        }
    }
}

document.querySelector(".add_clock_btn").addEventListener("click", () => {
    const timezone = document.querySelector(".timezone_input").value.trim();
    if (timezone) {
        const clockDashboard = document.querySelector(".clock_dashboard");
        const clock = new WorldClock(timezone);
        clockDashboard.appendChild(clock.clockContainer);
    } else {
        alert("Please enter a valid timezone");
    }
});
