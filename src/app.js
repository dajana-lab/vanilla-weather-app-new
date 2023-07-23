function dispalyTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "7adbfd2oe230496b6bf0deac7aetb83f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Zagreb&key=7adbfd2oe230496b6bf0deac7aetb83f&units=metric`;

axios.get(apiUrl).then(dispalyTemperature);
