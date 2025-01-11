"use strict";

// A method for displaying time
// A method for changing the time by a given amount of seconds
// A method for changing the time by a given amount of minutes
// A method for changing the time by a given amount of hours
// Instead of using sec === 3600 and sec === 86400. Try to use a span between the values. If 60 >= 3600, handle minutes, if 3600 >= 86400 handle minutes and hours. If >= 86400 handle hours and days
var clock = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  addSeconds: function addSeconds(sec) {
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
  addMinutes: function addMinutes(min) {
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
  addHours: function addHours(hrs) {
    this.hours += hrs;

    if (this.hours >= 24) {
      this.addDays(Math.floor(this.hours / 24));
      this.hours = this.hours % 24;
    }

    updateDisplayTime();
  },
  addDays: function addDays(days) {
    this.days += days;
    updateDisplayTime();
  }
};

function updateDisplayTime() {
  document.getElementById("days_display").textContent = "".concat(clock.days);
  document.getElementById("hours_display").textContent = "".concat(clock.hours);
  document.getElementById("minutes_display").textContent = "".concat(clock.minutes);
  document.getElementById("seconds_display").textContent = "".concat(clock.seconds);
  console.log("Time passed: ".concat(clock.days, " days, ").concat(clock.hours, " hours, ").concat(clock.minutes, " minutes and ").concat(clock.seconds));
}

function addSecondsFromInput() {
  var secondsInput = parseInt(document.getElementById("seconds_input").value);

  if (isNaN(secondsInput)) {
    alert("Please enter a number");
  } else {
    clock.addSeconds(secondsInput);
  }
}

function addMinutesFromInput() {
  var minutesInput = parseInt(document.getElementById("minutes_input").value);

  if (isNaN(minutesInput)) {
    alert("Please enter a number");
  } else {
    clock.addMinutes(minutesInput);
  }
}

function addHoursFromInput() {
  var hoursInput = parseInt(document.getElementById("hours_input").value);

  if (isNaN(hoursInput)) {
    alert("Please enter a number");
  } else {
    clock.addHours(hoursInput);
  }
}