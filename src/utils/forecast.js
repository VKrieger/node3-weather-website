const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=126b2023bce1be93c0e440a40273d879&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    try {
      if (body.error) {
        callback("Unable to find location. Try another search.", undefined);
      } else {
        callback(
          undefined,
          body.current.weather_descriptions[0] +
            ". It is currently " +
            body.current.temperature +
            " degrees. And it feels like " +
            body.current.feelslike +
            " degrees. The humidity is " +
            body.current.humidity
        );
      }
    } catch (error) {
      callback("No network connection", undefined);
    }
  });
};

module.exports = forecast;
