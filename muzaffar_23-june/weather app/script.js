const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function checkWeather(city) {
  fetch(apiUrl + city + `&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.floor(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
      document.querySelector(".wind").innerHTML = data.wind.speed + " k/hr";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching weather:", error.message);
    });
}

searchBtn.addEventListener("click", function () {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  }
});
