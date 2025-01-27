"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var tabs = _toConsumableArray(document.querySelectorAll('.tabs'));

var contents = _toConsumableArray(document.querySelectorAll('.content'));

tabs.forEach(function (tab) {
  return tab.addEventListener('click', handleTabs);
});
var index = 0;

function handleTabs(event) {
  var currentElement = event.target.closest('.tabs');

  if (!currentElement) {
    console.log('Clicked element is not a tab');
    return;
  }

  var newIndex = tabs.indexOf(currentElement);

  if (newIndex === -1) {
    console.log('Clicked element is not a tab');
    return;
  }

  if (newIndex === index) {
    console.log('Same tab clicked again. Ignoring');
    return;
  }

  if (index >= 0 && index < tabs.length) {
    tabs[index].classList.remove('active');
    contents[index].classList.remove('active_content');
  }

  index = newIndex;

  if (index >= 0 && index < tabs.length) {
    tabs[index].classList.add('active');
    contents[index].classList.add('active_content');
  }
}

radialObj = radialIndicator('.indicatorContainer', {
  fontSize: 20,
  fontColor: '#B7BACD',
  fontWeight: 400,
  radius: 40,
  barColor: {
    0: '#00D4BE',
    19: '#1AE780',
    83: '#1AE780',
    100: '#00D4BE'
  },
  barWidth: 5,
  initValue: 8.7,
  minValue: 0,
  maxValue: 10,
  roundCorner: true,
  percentage: false,
  interpolate: true,
  format: '##.#'
});