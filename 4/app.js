const fs = require("fs");
const axios = require("axios");
const { writeFile } = require("fs").promises;

const dataFromFileSync = fs.readFileSync("data.json");

const readDataFromFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file,"utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      };
    }
  )});
};

const getNumberInfo = (number) => {
  const url = `http://numbersapi.com/${number}`;
  return axios.get(url)
  .then((response) => response.data)
  .catch((error) => {
    console.log("Information not found ", error);
  });
};

const saveFile = (filename, data) => {
  return writeFile(filename, JSON.stringify(data))
  .then(() => "file saved")
  .catch((error) => {
    console.log("Something went wrong. File not saved. ", error);
  });
};

readDataFromFile("data.json")
  .then((dataFile) => {
    console.log("The number is: " + dataFile.number);
    console.log("File name is: " + dataFile.filename);
    return getNumberInfo(dataFile.number);
  })
  .then((numberInfo) => {
    console.log("" + numberInfo);
    const filename = JSON.parse(dataFromFileSync).filename
    return saveFile(`${filename}`, numberInfo);
  })
  .catch((error) => {
    console.log(error);
  });
