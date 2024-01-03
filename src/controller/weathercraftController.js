const openWeather = require('../utils/openWeather');

const weathercraftController = {
    renderWeathercraft: (req, res) => {
        res.render('weathercraft');
    },

    getWeather: async (req, res) => {
        try {
            const { lat, lon } = req.query;

            if (!lat || !lon) {
                return res.status(400).json({ error: 'Indica una latitud y longitud válida.' });
            }

            const weatherData = await openWeather(lat, lon);
            const { main, description } = weatherData;
            res.json({ main, description });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al obtener la información climática.' });
        }
    }
}

module.exports = weathercraftController;