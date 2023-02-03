/*[5 punktów] Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, 
a następnie:

pobierze z API informacje o danej liczbie (http://numbersapi.com/{number}, 
np http://numbersapi.com/42)
informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie*/

const fs = require("fs");
const axios = require("axios");
const { writeFile } = require("fs").promises;

const dataFromFileSync = fs.readFileSync("data.json");

//JSON.parse(data1)
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
  return axios.get(url).then((response) => response.data);
};

const saveFile = (filename, data) => {
  return writeFile(filename, JSON.stringify(data)).then(() => "file saved");
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
