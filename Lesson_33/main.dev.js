"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_Square) {
  _inherits(Circle, _Square);

  function Circle(width, color, left, top) {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, width, color, left, top));
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      document.body.insertAdjacentHTML("afterbegin", "\n            <div style=\"border-radius: 50%; width: ".concat(this.width, "px; height: ").concat(this.height, "px; background-color: ").concat(this._color, "; position: absolute; left: ").concat(this.left, "px; top: ").concat(this.top, "px\"></div>"));
    }
  }, {
    key: "area",
    get: function get() {// return Math.PI * Math.pow
    }
  }]);

  return Circle;
}(Square);

var c1 = new Circle(300, "blue", 200, 200);
c1.draw();

var Character =
/*#__PURE__*/
function () {
  function Character(name, health) {
    _classCallCheck(this, Character);

    this.name = name;
    this.health = health;
  }

  _createClass(Character, [{
    key: "attack",
    value: function attack() {
      console.log("".concat(this.name, " attacks!"));
    }
  }]);

  return Character;
}();

var Warrior =
/*#__PURE__*/
function (_Character) {
  _inherits(Warrior, _Character);

  function Warrior(name, health, strength) {
    var _this;

    _classCallCheck(this, Warrior);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Warrior).call(this, name, health));
    _this.strength = strength;
    return _this;
  }

  _createClass(Warrior, [{
    key: "punch",
    value: function punch() {
      console.log("".concat(this.name, " punch with ").concat(this.strength, " power!"));
    }
  }]);

  return Warrior;
}(Character);

var peach = new Character("Peach", 100);
peach;
peach.attack();
var mario = new Warrior("Mario", 500, 100);
mario.attack();
mario.punch();