// A method for displaying time
// A method for changing the time by a given amount of seconds
// A method for changing the time by a given amount of minutes
// A method for changing the time by a given amount of hours

// Instead of using sec === 3600 and sec === 86400. Try to use a span between the values. If 60 >= 3600, handle minutes, if 3600 >= 86400 handle minutes and hours. If >= 86400 handle hours and days

const clock = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    addSeconds: function (sec) {
        if (sec === 3600) {
            this.addHours(1);
        } else if (sec === 86400) {
            this.addDays(1);
        } else {
            this.seconds += sec;
        }

        if (this.seconds >= 60) {
            this.addMinutes(Math.floor(this.seconds / 60));
            this.seconds = this.seconds % 60;
        }

        updateDisplayTime();
    },

    addMinutes: function (min) {
        if (min === 60) {
            this.addHours(1);
        } else if (min === 1440) {
            this.addDays(1);
        } else {
            this.minutes += min;
        }

        if (this.minutes >= 60) {
            this.addHours(Math.floor(this.minutes / 60));
            this.minutes = this.minutes % 60;
        }

        updateDisplayTime();
    },

    addHours: function (hrs) {
        this.hours += hrs;

        if (this.hours >= 24) {
            this.addDays(Math.floor(this.hours / 24));
            this.hours = this.hours % 24;
        }

        updateDisplayTime();
    },

    addDays: function (days) {
        this.days += days;
        updateDisplayTime();
    },
};

function updateDisplayTime() {
    document.getElementById("days_display").textContent = `${clock.days}`;
    document.getElementById("hours_display").textContent = `${clock.hours}`;
    document.getElementById("minutes_display").textContent = `${clock.minutes}`;
    document.getElementById("seconds_display").textContent = `${clock.seconds}`;

    console.log(
        `Time passed: ${clock.days} days, ${clock.hours} hours, ${clock.minutes} minutes and ${clock.seconds}`
    );
}

function addSecondsFromInput() {
    const secondsInput = parseInt(
        document.getElementById("seconds_input").value
    );

    if (isNaN(secondsInput)) {
        alert("Please enter a number");
    } else {
        clock.addSeconds(secondsInput);
    }
}

function addMinutesFromInput() {
    const minutesInput = parseInt(
        document.getElementById("minutes_input").value
    );

    if (isNaN(minutesInput)) {
        alert("Please enter a number");
    } else {
        clock.addMinutes(minutesInput);
    }
}

function addHoursFromInput() {
    const hoursInput = parseInt(document.getElementById("hours_input").value);
    if (isNaN(hoursInput)) {
        alert("Please enter a number");
    } else {
        clock.addHours(hoursInput);
    }
}
