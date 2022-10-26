const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
require('dotenv').config();

router.get('/weather', function (req, res) {
  let cit = req.query.city
  let obj = []
  //Fix error handling
  grabData(cit).then(d1 => {
    obj.push({current: d1})
  })
  grabData2(cit).then(d2 => {
    obj.push({forecast: d2})
    res.send(obj)
  })
});


async function grabData(cn) {
  var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cn + "&units=imperial&appid=" + process.env.API_KEY;
  const r1 = await fetch(currentWeather)
  const c1 = await r1.json();
  return c1
}

async function grabData2(cn) {
  var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cn + "&units=imperial&appid=" + process.env.API_KEY;
  const r2 = await fetch(forecast)
  const c2 = await r2.json();
  return c2
}

module.exports = router;