const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.positionstack.com/v1/forward?access_key=9f04eb5aac818677047a8be921240768&query=" +
    encodeURIComponent(address);

  request({ url, json: true }, (error, {body}) => {
    try {
      if (body.data.length === 0) {
        callback("Unable to find location. Try another search.", undefined);
      } else {
        callback(undefined, {
          latitude: body.data[0].latitude,
          longitude: body.data[0].longitude,
          location: body.data[0].name,
        });
      }
    } catch (error) {
      callback("Unable to connect to lacation services!", undefined);
    }
  });
};

module.exports = geocode;
