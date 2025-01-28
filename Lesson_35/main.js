// add submit event for the form +
// get timezone value +

// create a Clock class with timezone +
// create a new instance of our Clock class +

// create method to draw  markup +
// create method to set proper time according to the timezone +

// refresh 'clock' each 1 sec

// 3rd part
class Clock {
    constructor(zone) {
        this.timeZone = zone;
        // All of this is for styling
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
    }

    // methods here:
    // 5th part
    init() {
        // Putting everything in place
        this.clockWrapper.innerHTML = '';

        this.clockWrapper.append(this.hoursHand);
        this.clockWrapper.append(this.minutesHand);
        this.clockWrapper.append(this.secondsHand);
        this.clockWrapper.append(this.centerEl);

        document.querySelector('#app').append(this.clockWrapper);
    }

    setPosition() {
        const now = new Date().toLocaleTimeString('en-us', { timeZone: this.timeZone }).split(':');

        // Convert string into numbers and remove space between
        const hours = parseInt(now[0]);
        const minutes = parseInt(now[1]);
        const seconds = parseInt(now[2]);

        this.hoursHand.style.translate = `rotate(${hours * 30} deg)`;
        this.minutesHand.style.translate = `rotate(${minutes * 6} deg)`;
        this.secondsHand.style.translate = `rotate(${seconds * 6} deg)`;

        console.log(hours, minutes, seconds);
    }
}

// 1st part
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#add-clock-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // 2nd part, taking the value
        const zone = document.querySelector('#timezone').ariaValueMax;
        console.log(zone);

        // 4th part
        const a = new Clock(zone);

        a.init();

        // Allows us to set an interval of our choice
        setInterval(() => {
            a.setPosition();
        }, 1000);

        console.log(a);
    });
});
