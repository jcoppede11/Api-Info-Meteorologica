const express = require('express');
const weathercraftRouter = express.Router();
const weathercraftController = require('../controller/weathercraftController');


weathercraftRouter.get('/', weathercraftController.renderWeathercraft);

module.exports = weathercraftRouter