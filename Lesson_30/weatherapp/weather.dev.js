"use strict";

// Building a Mini Weather App
// Your mission is to create a simple web page that displays the current weather for a specific city. You'll fetch weather data from a free API, handle the response using promises or async/await, and then neatly present the information on your page.
// Tools You'll Need
// Provider, like OpenWeatherMap or WeatherAPI, to get your API key.
// Step-by-Step Instructions
// Set Up Your HTML Structure:
// Create an HTML file (e.g., index.html).
// Structure the page with elements for:
// Input field (where the user enters the city name)
// Button (to trigger the weather search)
// Containers to display the weather data (e.g., city name, temperature, description, icon).
// Write Your JavaScript Code:
// Create a separate JavaScript file (e.g., script.js) and link it to your HTML.
// Get the user's input from the input field.
// Construct the API URL using the city name and your API key.
// Use the fetch() function to make a request to the API.
// Handle the promise returned by fetch():
// If successful:
// Parse the JSON response from the API.
// Extract the relevant weather data (temperature, description, icon, etc.).
// Update the HTML elements on your page to display the data.
// If there's an error (e.g., invalid city, network issue):
// Display a user-friendly error message on the page
var apiKey = "5a7e7522a15d8571bdfc87cfd54874ac";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
var locationInput = document.querySelector(".weather_container_input");
var searchButton = document.querySelector(".weather_container_btn");
var locationElement = document.querySelector(".city_data");
var temperatureElement = document.querySelector(".temp_data");
var descriptionElement = document.querySelector(".desc_data");
var humidityElement = document.querySelector(".humidity_data");
var windElement = document.querySelector(".wind_data");
var weatherIconElement = document.querySelector(".card_container_main_weather");
var defaultWeather = {
  name: "Stockholm",
  main: {
    temp: 20,
    humidity: 60
  },
  weather: [{
    description: "Clear sky",
    id: 800
  }],
  wind: {
    speed: 5
  }
};
document.addEventListener("DOMContentLoaded", function () {
  displayDefaultWeather();
});
searchButton.addEventListener("click", function () {
  var city = locationInput.value.toLowerCase();

  if (city) {
    getWeather(city);
  } else {
    // Display error
    displayError("Please enter a valid city!");
  }
});

function getWeather(city) {
  var url = "".concat(apiUrl, "?q=").concat(city, "&appid=").concat(apiKey, "&units=metric");
  fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error("City not found!");
    }

    return response.json();
  }).then(function (data) {
    displayWeather(data);
  })["catch"](function (error) {
    displayError(error.message);
  });
}

function displayDefaultWeather() {
  locationElement.textContent = defaultWeather.name;
  temperatureElement.textContent = "".concat(Math.round(defaultWeather.main.temp), "\xB0");
  descriptionElement.textContent = defaultWeather.weather[0].description;
  humidityElement.textContent = "".concat(defaultWeather.main.humidity, " %");
  windElement.textContent = "".concat(defaultWeather.wind.speed, " m/s");
  weatherIconElement.innerHTML = "";
  var iconCode = getWeatherIcon(defaultWeather.weather[0].id);
  var iconElement = document.createElement("img");
  iconElement.src = "http://openweathermap.org/img/wn/".concat(iconCode, "@2x.png");
  iconElement.alt = defaultWeather.weather[0].description;
  weatherIconElement.appendChild(iconElement);
}

function getWeatherIcon(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      // Display equivalent icon from api
      return "11d";

    case weatherId >= 300 && weatherId < 400:
      // Display equivalent icon from api
      return "09d";

    case weatherId >= 500 && weatherId < 600:
      // Display equivalent icon from api
      return "10d";

    case weatherId >= 600 && weatherId < 700:
      // Display equivalent icon from api
      return "13d";

    case weatherId >= 700 && weatherId < 800:
      // Display equivalent icon from api
      return "50d";

    case weatherId === 800:
      // Display equivalent icon from api
      return "01d";

    case weatherId >= 801 && weatherId < 810:
      // Display equivalent icon from api
      if (weatherId === 801) {
        return "02d";
      } else if (weatherId === 802) {
        return "03d";
      } else {
        return "04d";
      }

    default:
      return "01d";
  }
}

function displayWeather(data) {
  locationElement.textContent = data.name;
  temperatureElement.textContent = "".concat(Math.round(data.main.temp), "\xB0");
  descriptionElement.textContent = data.weather[0].description;
  humidityElement.textContent = "".concat(data.main.humidity, " %");
  windElement.textContent = "".concat(data.wind.speed, " m/s");
  weatherIconElement.innerHTML = "";
  var weatherId = data.weather[0].id;
  var iconCode = getWeatherIcon(weatherId);
  var iconElement = document.createElement("img");
  iconElement.src = "http://openweathermap.org/img/wn/".concat(iconCode, "@2x.png");
  iconElement.alt = data.weather[0].description;
  weatherIconElement.appendChild(iconElement);
  clearError("");
}

function displayError(message) {
  var errorMessageElement = document.querySelector(".error_message");
  var errorTextElement = document.querySelector(".error_message_text");

  if (errorMessageElement && errorTextElement) {
    errorTextElement.textContent = message;
    errorMessageElement.classList.add("visible");
  }
}

function clearError() {
  var errorMessageElement = document.querySelector(".error_message");
  var errorTextElement = document.querySelector(".error_message_text");

  if (errorMessageElement && errorTextElement) {
    errorTextElement.textContent = "";
    errorMessageElement.classList.remove("visible");
  }
}