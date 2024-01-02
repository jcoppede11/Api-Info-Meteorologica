const openWeather = require('../utils/openWeather');

const weathercraftController = {
    renderWeathercraft: (req, res) => {
        res.render('weathercraft');
    },

    getWeather: async (req, res) => {
        try {
            const { lat, lon } = req.query;
            
        // if (!lat || !lon) {
        //     return res.status(400).json({ error: 'Se requieren latitud y longitud' });
        // }

        const weatherData = await openWeather(lat, lon);
        res.json(weatherData);


        } catch (error) {
            console.error(error);
            sendStatus(500);
        }
    }
}

module.exports = weathercraftController;