# Meteo App

Meteo App is a simple weather application that provides current weather information, including temperature, humidity, wind speed, and weather conditions for a specified city. The app also displays the current time and day, along with a weekly weather forecast.

## Features

- **Search City**: Search for any city to get the current weather information.
- **Current Weather**: Displays the current temperature, humidity, wind speed, and weather type.
- **Current Time and Day**: Shows the current time and day.
- **Weekly Forecast**: Provides a weekly weather forecast with weather icons.

## Technologies Used

- **HTML**: Markup language for structuring the web page.
- **CSS**: Styling the web page, including Bootstrap for responsive design.
- **JavaScript**: For dynamic content and functionality.
- **Axios**: To make HTTP requests to the OpenWeather API.
- **OpenWeather API**: To fetch the current weather data.

## Getting Started

### Prerequisites

To run this project, you need a web browser and an internet connection.

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Y4xx/meteo-app.git
```
1. Navigate to the project directory:

```sh
    cd meteo-app
```
1. Open the index.html file in your web browser.

### Usage

- Enter the name of a city in the search bar.
- Click the "Search" button or press Enter.
- The current weather information for the searched city will be displayed.

### Code Overview

#### HTML
The HTML structure includes a search form for the city, a card to display the current weather information, and a section for the weekly forecast.

#### CSS
Bootstrap is used for styling to ensure the app is responsive and looks good on various devices.

#### JavaScript
index.js: Contains the main functionality of the app, including fetching weather data from the OpenWeather API and updating the DOM elements with the received data.
#### API

The app uses the OpenWeather API to fetch weather data. You need an API key to make requests.
```sh

const apiKey = "YOUR_API_KEY";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherInfo);
```
