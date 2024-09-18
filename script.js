// JavaScript source code
// https://openweathermap.org/api
// chatgpt id�j�r�s api js en kereszt�l htmlen bel�l

document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    const apiKey = '38d66cb7362bb9bf7814b7d7031b0564'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Hiba a lek�rdez�s sor�n!');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerHTML = `
                <h2>${city} weather</h2>
                <p>${weatherDescription}</p>
                <p>Temperature: ${temperature} Celsius</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});

