"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function CE(tagName, textContent, className, idName) {
  var element = document.createElement(tagName);
  element.textContent = textContent;

  if (className) {
    var classes = className.split(" ");
    classes.forEach(function (cls) {
      element.classList.add(cls);
    });
  }

  if (idName) {
    element.setAttribute("id", idName);
  }

  return element;
}

var WorldClock =
/*#__PURE__*/
function () {
  function WorldClock(timezone) {
    _classCallCheck(this, WorldClock);

    this.timezone = timezone;
    this.clockContainer = null;
    this.hoursElement = null;
    this.minutesElement = null;
    this.secondsElement = null;
    this.dateElement = null;
    this.displayClock();
    this.startClock();
  }

  _createClass(WorldClock, [{
    key: "displayClock",
    value: function displayClock() {
      var _this = this;

      this.clockContainer = CE("div", null, "clock_container");
      var counterContainer = CE("div", null, "counter_container");
      this.hoursElement = CE("div", "00", "time hidden", "hours");
      var hoursInfo = CE("span", "Hours", "hours_info hidden");
      var colon1 = CE("span", ":", "colon hidden");
      this.minutesElement = CE("div", "00", "time hidden", "minutes");
      var minutesInfo = CE("span", "Minutes", "minutes_info hidden");
      var colon2 = CE("span", ":", "colon hidden");
      this.secondsElement = CE("div", "00", "time hidden", "seconds");
      var secondsInfo = CE("span", "Seconds", "seconds_info hidden");
      counterContainer.append(this.hoursElement, hoursInfo, colon1, this.minutesElement, minutesInfo, colon2, this.secondsElement, secondsInfo);
      var dateContainer = CE("div", null, "date_container");
      this.dateElement = CE("div", "", "date_display hidden");
      dateContainer.appendChild(this.dateElement);
      this.getDateTimeBtn = CE("button", "Get date & time", "date_time_btn");

      this.getDateTimeBtn.onclick = function () {
        return _this.toggleDateTime();
      };

      var buttonContainer = CE("div", null, "button_container");
      this.getDateBtn = CE("button", "Get current date", "date_btn");

      this.getDateBtn.onclick = function () {
        return _this.getCurrentDate();
      };

      this.deleteButton = CE("button", "Delete clock", "delete_btn");

      this.deleteButton.onclick = function () {
        return _this.deleteClock();
      };

      buttonContainer.append(this.getDateBtn, this.getDateTimeBtn, this.deleteButton);
      this.clockContainer.append(counterContainer, dateContainer, buttonContainer);
      document.querySelector(".clock_dashboard").appendChild(this.clockContainer);
      console.log(this.clockContainer.innerHTML);
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      var now = new Date();
      var options = {
        timeZone: this.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      var timeString = now.toLocaleTimeString("en-US", options);

      var _timeString$split = timeString.split(":"),
          _timeString$split2 = _slicedToArray(_timeString$split, 3),
          hours = _timeString$split2[0],
          minutes = _timeString$split2[1],
          seconds = _timeString$split2[2];

      this.hoursElement.textContent = hours;
      this.minutesElement.textContent = minutes;
      this.secondsElement.textContent = seconds;
    }
  }, {
    key: "startClock",
    value: function startClock() {
      var _this2 = this;

      this.updateTime();
      setInterval(function () {
        return _this2.updateTime();
      }, 1000);
    }
  }, {
    key: "deleteClock",
    value: function deleteClock() {
      this.clockContainer.remove();
    }
  }, {
    key: "getCurrentDate",
    value: function getCurrentDate() {
      var now = new Date();
      var options = {
        timeZone: this.timezone,
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric"
      };
      var dateString = now.toLocaleDateString("en-US", options);
      this.dateElement.textContent = "".concat(dateString);
      this.dateElement.classList.remove("hidden");
      console.log(!this.dateElement.classList.contains("hidden"));
    }
  }, {
    key: "toggleDateTime",
    value: function toggleDateTime() {
      var toggleElements = [this.hoursElement, this.minutesElement, this.secondsElement, this.dateElement].concat(_toConsumableArray(this.clockContainer.querySelectorAll(".colon, .hours_info, .minutes_info, .seconds_info")));
      toggleElements.forEach(function (element) {
        return element.classList.toggle("hidden");
      });

      if (!this.hoursElement.classList.contains("hidden")) {
        this.getCurrentDate();
      }
    }
  }]);

  return WorldClock;
}();

document.querySelector(".add_clock_btn").addEventListener("click", function () {
  var timezone = document.querySelector(".timezone_input").value.trim();

  if (timezone) {
    var clockDashboard = document.querySelector(".clock_dashboard");
    var clock = new WorldClock(timezone);
    clockDashboard.appendChild(clock.clockContainer);
  } else {
    alert("Please enter a valid timezone");
  }
});