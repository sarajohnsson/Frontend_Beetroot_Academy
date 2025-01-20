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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old`
        );
    }
}

const person1 = new Person("Alice", 30);
// console.log(person1);

person1.greet();

// Prototype chain, one element nested inside another and another ...

class Rectangle {
    constructor(width, height, color, left, top) {
        this.width = width;
        this.height = height;
        this._color = color;
        this.left = left;
        this.top = top;
    }

    draw() {
        document.body.insertAdjacentHTML(
            "afterbegin",
            `
            <div style="width: ${this.width}px; height: ${this.height}px; background-color: ${this._color}; position: absolute; left: ${this.left}px; top: ${this.top}px"></div>`
        );
    }

    area() {
        return this.width * this.height;
    }

    set color(newColor) {
        this._color = newColor;
    }

    get color() {
        return this._color;
    }
}

// const rect1 = new Rectangle(100, 125, "tomato", 50, 40);

// const rect2 = new Rectangle(200, 300, "darkblue", 500, 200);

// rect1.draw();
// rect2.draw();
