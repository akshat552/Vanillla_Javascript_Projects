const search = document.querySelector("#searchBtn");
const tempOnScreen = document.querySelector("#currTemp");
const cityOnScreen = document.querySelector("#cityName");
const windOnScreen = document.querySelector("#windSpeed");
const humidityOnScreen = document.querySelector("#humidityInfo");
const weatherDiplayImage = document.querySelector("#weatherImage");
const infoSection = document.querySelector(".weatherInfo");
const feelsLikeTemp = document.querySelector("#feelsLike");
const weatherStatus = document.querySelector("#dayStatus");
const invalidEntry = document.querySelector(".errorMessage")
const inputField = document.querySelector("#city")

search.addEventListener("click", (e) => {
  e.preventDefault();

  const location = document.querySelector("#city").value;
  getuser(location);
});

async function getuser(city) {
  try {
    const locationData = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=096079867659b492b878ceaf85bd945f`
    );

    
    const locationResponse = await locationData.json();

    let lat = locationResponse[0]["lat"];
    let lon = locationResponse[0]["lon"];
    let cityName = locationResponse[0]["name"];

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=096079867659b492b878ceaf85bd945f`
    );

      const data = await response.json();
    console.log(data);

    // Temperature data

    let temperature = data.main["temp"];
    tempOnScreen.innerHTML = `${Math.floor(temperature)} °C`;

    // city output

    cityOnScreen.innerHTML = `${cityName}`;

    // Feels Like Temperature data

    let feelsLike = data.main["feels_like"];
    feelsLikeTemp.innerHTML = `Feels like ${Math.round(feelsLike)} °C`;

    // Humidity
    let humidity = data.main["humidity"];
    humidityOnScreen.innerHTML = `${humidity}%`;

    // WindSpeed
    let speed = data.wind["speed"];
    windOnScreen.innerHTML = `${speed} Kmph`;

    // Weather Image Changer
    const weathertype = data.weather[0]["main"];
    console.log(`weathertype ${weathertype}`);

    if (weathertype == "Haze") {
      weatherDiplayImage.src = "./images/mist.png";
      weatherStatus.innerHTML = `${weathertype}`;
    } else if (weathertype == "Clouds") {
      weatherDiplayImage.src = "./images/clouds.png";
      weatherStatus.innerHTML = `${weathertype}`;
    } else if (weathertype == "Clear") {
      weatherDiplayImage.src = "./images/clear.png";
      weatherStatus.innerHTML = `${weathertype}`;
    } else if (weathertype == "Rain") {
      weatherDiplayImage.src = "./images/rain.png";
      weatherStatus.innerHTML = `${weathertype}`;
    } else if (weathertype == "Drizzle") {
      weatherDiplayImage.src = "./images/drizzle.png";
      weatherStatus.innerHTML = `${weathertype}`;
    } else if (weathertype == "Snow") {
      weatherDiplayImage.src = "./images/snow.png";
      weatherStatus.innerHTML = `${weathertype}`;
    }

    infoSection.style.display = "block";
    invalidEntry.style.display='none';
      
    }

    
   catch (error) {
    console.log("Error:", error);
    invalidEntry.style.display='block';
    infoSection.style.display = "none";
    
  }
}
