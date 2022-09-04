//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherapi = {
    key: "34c9cdbd363cbc6a406a7667e195913c",
    baseurl: "https://api.openweathermap.org/data/2.5/weather",
}
const inputbox = document.getElementById('search');

//event listener function on keypress
inputbox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(inputbox.value);
        GetWaetherReport(inputbox.value);
        document.querySelector('.weath-body').style.display = "block";
    }
});

//get weather report
function GetWaetherReport(city) {
    fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(ShowWeatherReport);
}

//show weather report
function ShowWeatherReport(weather) {
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`
    let MinMaxTemp = document.getElementById('min-max');
    MinMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) , ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;
    let weathtype = document.getElementById('type');
    weathtype.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todaydate = new Date();
    date.innerHTML = showdate(todaydate);
    //Smoke/  dust/Sand/Ash/Squall/
    //rain / clouds/clear/haze/mist/ thunderstorm/fog/Tornado/snow/drizzle

    if (weathtype.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('./img/rain.jpg')";
    }
    else if (weathtype.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('./img/cloudy.jpg')";
    }
    else if (weathtype.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('./img/clear.jpg')";
    }
    else if (weathtype.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('./img/haze.jpg')";
    }
    else if (weathtype.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('./img/blue-mist.jpg')";
    }
    else if (weathtype.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')";
    }
    else if (weathtype.textContent == 'Fog') {
        document.body.style.backgroundImage = "url('./img/fog.jpg')";
    }
    else if (weathtype.textContent == 'Tornado') {
        document.body.style.backgroundImage = "url('./img/tornado.jpg')";
    }
    else if (weathtype.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('./img/snow.jpg')";
    }
    else if (weathtype.textContent == 'Drizzle') {
        document.body.style.backgroundImage = "url('./img/drizzle.jpg')";
    }

    const { icon} = weather.weather[0];
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
    let speed=document.getElementById('windspeed');
    speed.innerHTML=`wind speed :  ${weather.wind.speed}  km/h`





}



//date manage
function showdate(dateArgv) {
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = dateArgv.getDate();
    let day = days[dateArgv.getDay()];
    let mon = months[dateArgv.getMonth()];
    let year = dateArgv.getFullYear();
    return `${date} ${mon} (${day}) ${year}`;
}