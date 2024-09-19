// JavaScript source code
// https://openweathermap.org/api
// chatgpt id�j�r�s api js en kereszt�l htmlen bel�l



// Az API kulcsodat itt add meg
const apiKey = '38d66cb7362bb9bf7814b7d7031b0564';

function getWeather() {
    // A v�ros neve, amit a felhaszn�l� megad
    const city = document.getElementById('city').value;

    // OpenWeatherMap API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=hu`;

    // Fetch API-val lek�rj�k az id�j�r�si adatokat
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('V�ros nem tal�lhat�');
            }
            return response.json();
        })
        .then(data => {
            // Az id�j�r�si adatok megjelen�t�se
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            weatherDiv.innerHTML = `
                <p><strong>V�ros:</strong> ${data.name}</p>
                <p><strong>H�m�rs�klet:</strong> ${temperature} �C</p>
                <p><strong>Id�j�r�s:</strong> ${description}</p>
                <p><strong>P�ratartalom:</strong> ${humidity}%</p>
            `;
        })
        .catch(error => {
            // Hiba kezel�se
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `<p>Hiba t�rt�nt: ${error.message}</p>`;
        });
}