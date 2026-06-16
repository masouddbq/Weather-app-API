const city = document.querySelector(".box input");
const btn = document.querySelector(".box button");
let currentDate = new Date();
const month = currentDate.getMonth();
const weekDay = currentDate.getDay();
const dayNum = currentDate.getDate();
let monthTitle = document.querySelector(".month");
let dayTitle = document.querySelector(".month-day");
let weekdayTitle = document.querySelector(".week-day");
let cityTitle = document.querySelector(".city");
const dateLine = document.querySelector(".date");
const temp = document.querySelector(".temp");
const degree = document.querySelector(".degree");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const windNum = document.querySelector(".wind-num");
const tempMax = document.querySelector(".max-num");
const levelNum = document.querySelector(".level-num");
const infoBox = document.querySelector(".weather-info");
let weatherImage = document.querySelector(".weather-icon img");

// let weatherTemptext = document.querySelector(".weather-temp p");
// let weatherTempCity = document.querySelector(".weather-temp h2");
// let weatherDesc = document.querySelector(".weather-desc h3");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const icons = [
  {
    id: 1,
    title: "snowy",
    icon: "./images/snowy.png",
  },
  {
    id: 2,
    title: "wind-rain",
    icon: "./images/wind-rain.png",
  },
  {
    id: 3,
    title: "wind-rain",
    icon: "./images/rainy.png",
  },
  {
    id: 4,
    title: "wind-rain",
    icon: "./images/thunder-rain.png",
  },
  {
    id: 5,
    title: "wind-rain",
    icon: "./images/half-cloud-rain.png",
  },
  {
    id: 6,
    title: "wind-rain",
    icon: "./images/thunder-wind.png",
  },
  {
    id: 7,
    title: "wind-rain",
    icon: "./images/cloudy.png",
  },
  {
    id: 8,
    title: "wind-rain",
    icon: "./images/half-cloudy.png",
  },
  {
    id: 9,
    title: "wind-rain",
    icon: "./images/sunny.png",
  },
];

monthTitle.textContent = `${months[month]} ,`;
dayTitle.textContent = `${dayNum} ,`;
weekdayTitle.textContent = days[weekDay];

btn.addEventListener("click", () => {
  let cityName = city.value;
  let api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2c946df43b9bdf889b1c7e7fec391216&units=metric`;
  
  
  fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);


        
    
      infoBox.classList.remove("hide");
      cityTitle.textContent = city.value.toUpperCase();
      dateLine.classList.remove("hide");
      temp.textContent = Math.round(`${data.list[0].main.temp}`);
      degree.classList.remove("hide");
      feelsLike.textContent = `feels like : ${data.list[0].main.feels_like} /`;
      humidity.textContent = `humidity : ${data.list[0].main.humidity} %`;
      windNum.textContent = `${data.list[0].wind.speed} km/h`;
      tempMax.textContent = `${data.list[0].main.temp_max} °C`;
      levelNum.textContent = `${data.list[0].main.sea_level} ft`;
      

      let temperature = data.list[0].main.temp;
      
      if (temperature < -5) {
        weatherImage.src = icons[0].icon;
      } else if (temperature <= -3 && temperature > -5) {
        weatherImage.src = icons[1].icon;
      } else if (temperature <= 1 && temperature > -3) {
        weatherImage.src = icons[2].icon;
      } else if (temperature <= 5 && temperature > 1) {
        weatherImage.src = icons[3].icon;
      } else if (temperature <= 10 && temperature > 5) {
        weatherImage.src = icons[4].icon;
      } else if (temperature <= 18 && temperature > 10) {
        weatherImage.src = icons[5].icon;
      } else if (temperature <= 22 && temperature > 18) {
        weatherImage.src = icons[6].icon;
      } else if (temperature <= 27 && temperature > 22) {
        weatherImage.src = icons[7].icon;
      } else {
        weatherImage.src = icons[8].icon;
      }
      console.log(data.weather.description);
    });
});
