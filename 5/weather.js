const request = require("request");

const getWeather = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=${location}`;
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const data = JSON.parse(body);
          resolve(data);
        } else {
          reject("Weather not found");
        }
      });
    });
  };

  module.exports = getWeather;
