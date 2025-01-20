class Circle extends Square {
    constructor(width, color, left, top) {
        super(width, color, left, top);
    }

    draw() {
        document.body.insertAdjacentHTML(
            "afterbegin",
            `
            <div style="border-radius: 50%; width: ${this.width}px; height: ${this.height}px; background-color: ${this._color}; position: absolute; left: ${this.left}px; top: ${this.top}px"></div>`
        );
    }

    get area() {
        // return Math.PI * Math.pow
    }
}

const c1 = new Circle(300, "blue", 200, 200);

c1.draw();

class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        console.log(`${this.name} attacks!`);
    }
}

class Warrior extends Character {
    constructor(name, health, strength) {
        super(name, health);
        this.strength = strength;
    }

    punch() {
        console.log(`${this.name} punch with ${this.strength} power!`);
    }
}

const peach = new Character("Peach", 100);
peach;

peach.attack();

const mario = new Warrior("Mario", 500, 100);

mario.attack();

mario.punch();
