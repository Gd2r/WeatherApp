const img = document.querySelector("img");

async function GetTrump() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=lvuDw5yyaTK9In3aOjZ0S1LJ4lWeQ4s3&s=donaldtrump",
      { mode: "cors" }
    );
    const Gifdata = await response.json();
    img.src = Gifdata.data.images.original.url;
  } catch {
    console.error(error);
  }
}

GetTrump();
// public api key you dumpass
const API_KEY = `GTUTXU29WX3WN45YPMAFDQLUF`;

async function getWeather(city) {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`,
      { mode: "cors" }
    );

    if (!weather.ok) {
      throw new Error("type a city idiot");
    }

    const weatherData = await weather.json();
    displayWeather(weatherData);
  } catch {
    console.error(error.message);
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("WeatherResult");

  if (!weatherInfo) {
    console.error('Element with ID "WeatherResult" not found');
    return;
  }

  const cityName = data.address;
  const temperature = data.currentConditions.temp;
  const condition = data.currentConditions.conditions;
  const CelsiusTemp = ((temperature - 32) * 5) / 9;

  weatherInfo.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Temperature: ${CelsiusTemp.toFixed(1)}°C</p>
        <p>Condition: ${condition}</p>
    `;
}

document
  .querySelector(".WeatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("cityinput").value;

    if (city) {
      getWeather(city);
    } else {
      alert("Please enter a city name");
    }
  });
