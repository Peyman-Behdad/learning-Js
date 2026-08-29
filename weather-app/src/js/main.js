import "../style.css";

const apiKey = "205a8e22e733272f1dfbff0a9124acb4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search .searchbox");
const searchBtn = document.querySelector(".search .searchbtn");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const weatherError = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    weatherError.style.display = "block";
    weatherError.classList.remove = "hidden";
    weatherBox.style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "src/assets/image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "src/assets/image/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "src/assets/image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "src/assets/image/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "src/assets/image/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "src/assets/image/mist.png";
    }

    weatherBox.style.display = "block";
    weatherBox.classList.remove = "hidden";
    weatherError.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
