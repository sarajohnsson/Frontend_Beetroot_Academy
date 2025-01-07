// Create object that describes a car
// Method that displays car info
// Method counting time frame necessary to cover a given distance with average speed

const car = {
    manufacturer: "Ford",
    model: "Mustang GT",
    yearOfRelease: 2024,
    averageSpeed: 267,
};

function displayCarInfo() {
    const carInfo = `
    <p class="text">Manufacturer: ${car.manufacturer}</p>
    <p class="text">Model: ${car.model}</p>
    <p class="text">Year of release: ${car.yearOfRelease}</p>
    <p class="text">Average speed: ${car.averageSpeed} km/h</p>
    `;

    console.log(carInfo);

    document.getElementById("result").innerHTML = carInfo;
}

function calculateTime() {
    const distance = parseInt(document.getElementById("distance_input").value);
    // let distance = parseInt(prompt("Enter a distance in km"));

    if (isNaN(distance) || distance <= 0) {
        alert(`Please enter a valid distance`);
    }

    if (car.averageSpeed <= 0) {
        alert(`Speed must be greater than 0`);
        return;
    }

    let time = distance / car.averageSpeed;

    if (time >= 4) {
        const breaks = Math.floor(time / 4);
        time += breaks;
    }

    console.log(`Time to cover ${distance} km: ${time.toFixed(2)} hours`);

    document.getElementById(
        "result"
    ).textContent = `Time to cover ${distance} km: ${time.toFixed(2)} hours`;
}
