# My Weather App

##Link to open
https://akshat552.github.io/Vanillla_Javascript_Projects/6_Project6_Weather_App/

## Description

My Weather App is a simple web application that allows users to check the current weather conditions for a specific location. It provides real-time weather data, including temperature, humidity, wind speed, and a brief description of the weather conditions.

The app was built using JavaScript, HTML, and CSS, making it a lightweight and easy-to-use tool for checking the weather quickly and conveniently.

## Features

- **Current Weather**: Users can enter a city name or zip code to get the current weather conditions for that location.
- **Temperature**: The app displays the temperature in both Celsius and Fahrenheit for the user's convenience.
- **Humidity**: It shows the current humidity percentage.
- **Wind Speed**: Users can see the wind speed in either kilometers per hour (km/h) or miles per hour (mph).
- **Weather Description**: The app provides a brief description of the current weather conditions (e.g., clear sky, rainy, cloudy).

## Usage

To use My Weather App, follow these steps:

1. Open the app in your web browser.
2. In the input field, enter the name of a city or a zip code for the location you want to check the weather for.
3. Click the "Get Weather" button, and the app will display the current weather conditions for the specified location.

## Installation

You don't need to install anything to use My Weather App since it's a web application. Simply open the provided HTML file in your web browser, and you're good to go.

## API Integration

My Weather App uses the OpenWeatherMap API to retrieve weather data. You'll need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace the placeholder `YOUR_API_KEY` in the JavaScript code with your actual API key to make the app work correctly.

```javascript
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
```

## Credits

This project was created by [Your Name]. Feel free to contact me with any questions or feedback.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
