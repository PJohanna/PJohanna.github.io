// JavaScript source code
// https://openweathermap.org/api
// chatgpt idõjárás api js en keresztül htmlen belül



// Az API kulcsodat itt add meg
const apiKey = '38d66cb7362bb9bf7814b7d7031b0564';

function getWeather() {
    // A város neve, amit a felhasználó megad
    const city = document.getElementById('city').value;

    // OpenWeatherMap API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

    // Fetch API-val lekérjük az idõjárási adatokat
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Város nem található');
            }
            return response.json();
        })
        .then(data => {
            // Az idõjárási adatok megjelenítése
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            weatherDiv.innerHTML = `
                <p><strong>Város:</strong> ${data.name}</p>
                <p><strong>Hõmérséklet:</strong> ${temperature} °C</p>
                <p><strong>Idõjárás:</strong> ${description}</p>
                <p><strong>Páratartalom:</strong> ${humidity}%</p>
            `;
        })
        .catch(error => {
            // Hiba kezelése
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `<p>Hiba történt: ${error.message}</p>`;
        });
}