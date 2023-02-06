const fs = require("fs");

const readList = (filename) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, "utf-8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  };

module.exports = readList;