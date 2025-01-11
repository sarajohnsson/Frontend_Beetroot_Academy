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
var temperatureElement = document.querySelector(".city_data");
var descriptionElement = document.querySelector(".city_data");
searchButton.addEventListener("click", function () {
  var city = cityInput.value;

  if (city) {
    getWeather(city);
  }
});

function getWeather(city) {
  var url = "".concat(apiUrl, "?q=").concat(city, "&appid=").concat(apiKey, "&units=metric");
  fetch(url).then(function (res) {
    return res.json();
    console.log(res);
  }).then(function (response) {
    console.log(response);
  });
}