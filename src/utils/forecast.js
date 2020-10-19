const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6607a5e2e2ed7d3abd30e81b0f50fd3f&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services..:(", undefined);
    } else if (body.error) {
      callback("Uanble to find weather.Try another search!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ".It is currently " +
          body.current.temperature +
          " degrees out.It feelslike " +
          body.current.feelslike +
          " degrees out"
      );
    }
  });
};

module.exports = forecast;
