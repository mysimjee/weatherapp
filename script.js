let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let weatherinfo = [document.getElementById("city-name"), document.getElementById("weather-type"), document.getElementById("temp"), document.getElementById("min-temp"), document.getElementById("max-temp")]
async function getweatherinformation(city) {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    let getinfo = await fetch(FULL_URL).then(response => response.json())
    let weathertype = getinfo.weather[0].main
    let cityname = getinfo.name
    const weatherdata = getinfo.main
    weatherinfo[0].innerText = cityname
    weatherinfo[1].innerText = weathertype
    weatherinfo[2].innerText = weatherdata.temp
    weatherinfo[3].innerText = weatherdata.temp_min
    weatherinfo[4].innerText = weatherdata.temp_max
    return weatherdata, cityname, weathertype

}

function searchdata() {
    let inputcity = document.getElementById("city-input")
    let city = inputcity.value
    try {
        weatherinfo[0].innerText = "Searching"
        weatherinfo[1].innerText = "Searching"
        weatherinfo[2].innerText = "Searching"
        weatherinfo[3].innerText = "Searching"
        weatherinfo[4].innerText = "Searching"
        return getweatherinformation(city)
    } catch(error) {
        weatherinfo[0].innerText = "Failed To Retrieve Weather Information"
    }
}