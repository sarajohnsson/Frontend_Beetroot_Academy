"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class user {
//     constructor(name) {
//         this.name = name;
//         this.role = "admin";
//     }
// }
// function user(name) {
//     this.name = name;
//     this.role = "admin";
// }
// New allows us to create an instance of global class, object or anything. This intance will inherit anything from the parent
// This is like a reference to the parent object
// const userDavid = new user("David");
// For classnames start with capital letter
var Person =
/*#__PURE__*/
function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old"));
    }
  }]);

  return Person;
}();

var person1 = new Person("Alice", 30); // console.log(person1);

person1.greet(); // Prototype chain, one element nested inside another and another ...

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(width, height, color, left, top) {
    _classCallCheck(this, Rectangle);

    this.width = width;
    this.height = height;
    this._color = color;
    this.left = left;
    this.top = top;
  }

  _createClass(Rectangle, [{
    key: "draw",
    value: function draw() {
      document.body.insertAdjacentHTML("afterbegin", "\n            <div style=\"width: ".concat(this.width, "px; height: ").concat(this.height, "px; background-color: ").concat(this._color, "; position: absolute; left: ").concat(this.left, "px; top: ").concat(this.top, "px\"></div>"));
    }
  }, {
    key: "area",
    value: function area() {
      return this.width * this.height;
    }
  }, {
    key: "color",
    set: function set(newColor) {
      this._color = newColor;
    },
    get: function get() {
      return this._color;
    }
  }]);

  return Rectangle;
}(); // const rect1 = new Rectangle(100, 125, "tomato", 50, 40);
// const rect2 = new Rectangle(200, 300, "darkblue", 500, 200);
// rect1.draw();
// rect2.draw();