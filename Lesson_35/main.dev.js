"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// add submit event for the form +
// get timezone value +
// create a Clock class with timezone +
// create a new instance of our Clock class +
// create method to draw  markup +
// create method to set proper time according to the timezone +
// refresh 'clock' each 1 sec
// 3rd part
var Clock =
/*#__PURE__*/
function () {
  function Clock(zone) {
    _classCallCheck(this, Clock);

    this.timeZone = zone; // All of this is for styling

    this.container = document.createElement('div');
    this.clockWrapper = document.createElement('div');
    this.hoursHand = document.createElement('div');
    this.minutesHand = document.createElement('div');
    this.secondsHand = document.createElement('div');
    this.centerEl = document.createElement('div');
    this.secondsHand.setAttribute('id', 'seconds-hand');
    this.secondsHand.setAttribute('id', 'minutes-hand');
    this.secondsHand.setAttribute('id', 'hours-hand');
    this.counterEl.setAttribute('id', 'center');
    this.clockWrapper.classList.add('clock');
  } // methods here:
  // 5th part


  _createClass(Clock, [{
    key: "init",
    value: function init() {
      // Putting everything in place
      this.clockWrapper.innerHTML = '';
      this.clockWrapper.append(this.hoursHand);
      this.clockWrapper.append(this.minutesHand);
      this.clockWrapper.append(this.secondsHand);
      this.clockWrapper.append(this.centerEl);
      document.querySelector('#app').append(this.clockWrapper);
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var now = new Date().toLocaleTimeString('en-us', {
        timeZone: this.timeZone
      }).split(':'); // Convert string into numbers and remove space between

      var hours = parseInt(now[0]);
      var minutes = parseInt(now[1]);
      var seconds = parseInt(now[2]);
      this.hoursHand.style.translate = "rotate(".concat(hours * 30, " deg)");
      this.minutesHand.style.translate = "rotate(".concat(minutes * 6, " deg)");
      this.secondsHand.style.translate = "rotate(".concat(seconds * 6, " deg)");
      console.log(hours, minutes, seconds);
    }
  }]);

  return Clock;
}(); // 1st part


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#add-clock-form').addEventListener('submit', function (event) {
    event.preventDefault(); // 2nd part, taking the value

    var zone = document.querySelector('#timezone').ariaValueMax;
    console.log(zone); // 4th part

    var a = new Clock(zone);
    a.init(); // Allows us to set an interval of our choice

    setInterval(function () {
      a.setPosition();
    }, 1000);
    console.log(a);
  });
});