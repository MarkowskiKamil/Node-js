const fs = require("fs");
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const saveFile = (filename, data) => {
    return writeFile(filename, JSON.stringify(data), { flag: 'a+' })
      .then(() => console.log("The list has been updated"))
      .catch((error) => {
        console.log("Something went wrong. File not saved. ", error);
      });
  };

  module.exports = saveFile;
