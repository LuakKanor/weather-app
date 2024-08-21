const apiKey = "69213e53b833e9e12c544e0625cef6fa";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();
  // console.log("Response : ", response);
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="/assets/clouds.png";   
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src = "/assets/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src = "/assets/rain.png";
  }
  
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src = "/assets/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src = "/assets/mist.png";
  }
  else if(data.weather[0].main=="Snow"){
    weatherIcon.src = "/assets/snow.png";
  }
}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
