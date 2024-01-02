const axios = require ('axios');

async function openWeatherApi(lat, lon) {
    const apiKey = process.env.OPENWEATHERMAP;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;    

    try {
        const response = await axios.get(url);
        const weatherData = response.data;

        console.log(weatherData);
        return weatherData;
        
    } catch (error) {
        return null;
    }
}

module.exports = openWeatherApi;