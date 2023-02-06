const fs = require("fs");

const saveFile = (filename, data) => {
    return writeFile(filename, JSON.stringify(data))
      .then(() => "The list has been updated")
      .catch((error) => {
        console.log("Something went wrong. File not saved. ", error);
      });
  };

  module.exports = saveFile;