const express = require('express');
const weathercraftRouter = express.Router();
const weathercraftController = require('../controller/weathercraftController');


weathercraftRouter.get('/', weathercraftController.renderWeathercraft);
weathercraftRouter.get('/getWeather', weathercraftController.getWeather);

module.exports = weathercraftRouter