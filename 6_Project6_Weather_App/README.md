# My Weather App

# Disclaimer: Insecure Connection Warning

Before you proceed to open this project in your browser, please be aware that it requires allowing insecure connections. Follow the steps below to proceed:

**Step 1:** Launch your preferred web browser.

**Step 2:** When attempting to access the project, you may encounter a warning message indicating that the connection is insecure. This is because the project might be using HTTP instead of HTTPS.

**Step 3:** Depending on your browser, you will need to take different actions to proceed:

- **For Google Chrome:**
    - Click on the "Advanced" button (usually appears as "Advanced" or "Details").
    - Next, click on "Proceed to [Project URL] (unsafe)" or a similar option to continue to the project despite the insecure connection.

- **For Mozilla Firefox:**
    - Click on "Advanced" (may also appear as "Advanced" or "Add Exception").
    - Then, click on "Accept the Risk and Continue" or a similar option to access the project.

- **For Microsoft Edge:**
    - Click on "Details" (or "More Information" or "Advanced").
    - Subsequently, click on "Go on to the webpage (not recommended)" or a similar option to proceed.

**Step 4:** After taking the above action, the project should now load in your browser without further warnings.

Please be cautious when accessing projects with insecure connections, as data transmitted may not be secure. Ensure that you trust the source before proceeding.

Note: It's recommended to use secure HTTPS connections whenever possible for increased security and data protection.

##Link to open
http://akshat552.github.io/Vanillla_Javascript_Projects/6_Project6_Weather_App/

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
