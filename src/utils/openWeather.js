const axios = require ('axios');

async function openWeatherApi(lat, lon) {
    const apiKey = process.env.OPENWEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;    

    try {
        const response = await axios.get(url);
        const weatherData = response.data;

        return weatherData;
        
    } catch (error) {
        console.error('Error al obtener la información:', error);
        return res.sendStatus(500);
    }
}

module.exports = openWeatherApi;