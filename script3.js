function getWeather() {
   const apiKey = '066406da9bcbfb193df4be131769f616'; 
    const city = document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }
}

const currentWeatherUrl ='https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${066406da9bcbfb193df4be131769f616}';
const forecastUrl ='https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${066406da9bcbfb193df4be131769f616}'; 
 

function getWeather(){
    fetch(currentWeatherUrl) 
          .then(response => response.json())
          .then(data => {
                 displayWeather(data);
          }) 
          .catch(error => {
              console.error('Error fetching current weather data:', error);
                       alert('Error fetching current weather data. Please try again.');
          });        
} 

function displayWeather(data) { 
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast'); 

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = ''; 
} 

function displayWeather(data){

    const cityName = data.name;
    const temperature = Math.round
}