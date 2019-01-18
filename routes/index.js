// now we can set the route path & initialize the API

let express = require('express');
let weatherController =require('../controllers/weatherController');
const router = express.Router();

router.get('/api/getWeather', weatherController.getWeather);

module.exports = router;