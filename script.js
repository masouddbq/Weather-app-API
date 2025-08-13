let city = document.querySelector(".box input");
let btn = document.querySelector(".box button");
let weatherIcon = document.querySelector(".weather-icon img");
let weatherTemp = document.querySelector(".weather-temp h2");
let weatherDesc = document.querySelector(".weather-desc h3");

btn.addEventListener("click", function(){
    let cityName = city.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2c946df43b9bdf889b1c7e7fec391216&units=metric`;
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        // نمایش اطلاعات آب و هوا
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherTemp.innerHTML = `${data.main.temp}°C`;
        weatherDesc.innerHTML = data.weather[0].description;
        // پاک کردن input
        city.value = "";
    })
    .catch(error => {
        console.log(error);
    })
})  

 