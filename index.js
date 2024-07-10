// Formatting the time in HH:MM format
function formatTime(date) {
  let hours = date.getHours();
  // Add a leading zero to the hours if less than 10
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  // Add a leading zero to the minutes if less than 10
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// Formatting the day of the week
function formatDay(date) {
  const dayIndex = date.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  // Get the name of the day based on the day index
  const day = days[dayIndex];
  return day;
}

// Getting current time and day and displaying it
const currentTime = document.querySelector("#current-time");
let newCurrentTime = new Date();
// Set the current time in the HTML
currentTime.innerHTML = formatTime(newCurrentTime);

const currentDay = document.querySelector("#current-day");
let newCurrentDay = new Date();
// Set the current day in the HTML
currentDay.innerHTML = formatDay(newCurrentDay);

// Function to display weather information based on the API response
function displayWeatherInfo(response) {
  // Set the city name
  document.querySelector("#searched-city").innerHTML = response.data.name;
  // Round and set the current temperature
  const temperature = Math.round(response.data.main.temp);
  document.querySelector("#current-temperature").innerHTML = `${temperature}°`;
  // Set the humidity percentage
  const humidity = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `${humidity}%`;
  // Round and set the wind speed
  const windSpeed = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `${windSpeed}km/h`;
  // Set the weather type (e.g., Cloudy, Sunny)
  document.querySelector("#weather-type").innerHTML = response.data.weather[0].main;
}

// Function to search for a city's weather information using the OpenWeatherMap API
function searchCity(city) {
  const apiKey = "2b5fc755ac2ec59250868b5527df31c4";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  // Make a GET request to the API and display the weather information
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherInfo);
}

// Event handler for the search form submission
function handleSubmit(event) {
  event.preventDefault();
  // Get the city name from the input field
  let city = document.querySelector("#search-input").value;
  // Search for the city's weather information
  searchCity(city);
}

// Add event listener to the search form to handle form submission
const searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);
