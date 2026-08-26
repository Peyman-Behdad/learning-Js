import "../style.css";

const apiKey = "205a8e22e733272f1dfbff0a9124acb4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search .searchbox");
const searchBtn = document.querySelector(".search .searchbtn");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
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
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
