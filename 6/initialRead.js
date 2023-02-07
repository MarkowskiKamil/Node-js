const fs = require("fs");

const initialReadList = (filename) => {
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

module.exports = initialReadList;