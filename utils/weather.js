const request = require("request");

const keys = require("./keys");

const getWeather = async (city, cb, units = "metric") => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=${encodeURIComponent(units)}&appid=${encodeURIComponent(
    keys.OPEN_WEATHER_API_KEY
  )}`;

  await request({ url, json: true }, (err, resp) => {

    
    if (err) {
      cb({error : "an error occoured reaching the API"});
      return;
    }

    if (resp.body.cod !== 200) {
      cb({error : resp.body.message});
      return;
    }

    const { temp, humidity } = resp.body.main;
    const { name } = resp.body;

    const weather = { temp, humidity, name , description : resp.body.weather[0].description };

    cb(weather);
  });
};

module.exports = { getWeather };
