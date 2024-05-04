

   
    function getWeather() {
        const apiKey =  "629428c6ea22d00e3f355e45ad461237"; 
        const city = document.querySelector(".weather__searchform").value;
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                updateWeatherUI(data);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Error fetching weather data. Please try again.");
            });
    }

    function updateWeatherUI(weatherData) {
        document.querySelector(".weather__city").textContent = weatherData.name;

       
        const datetime = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        document.querySelector(".weather__datetime").textContent = datetime.toLocaleDateString('en-US', options);

        document.querySelector(".weather__forecast").textContent = weatherData.weather[0].description;

        document.querySelector(".weather__temperature").textContent = `${weatherData.main.temp}°C`;

        document.querySelector(".weather__minmax").innerHTML = `
            <p>Min: ${weatherData.main.temp_min}°C</p>
            <p>Max: ${weatherData.main.temp_max}°C</p>
        `;
        document.querySelector(".weather__humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;

        document.querySelector(".weather__pressure").textContent = `Pressure: ${weatherData.main.pressure} hPa`;
        document.querySelector(".weather__wind").textContent = `Wind: ${weatherData.wind.speed} m/s`;
    }
document.querySelector(".weather__search").addEventListener("submit", function(event) {
    event.preventDefault(); 
    getWeather(); 
    document.querySelector(".weather__searchform").value = ""; 
});

