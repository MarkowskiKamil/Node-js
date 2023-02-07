//This file contains functions used in main app
const request = require("request");
const axios = require("axios");

const getUser = (login) => {
    const url = `https://api.github.com/users/${login}`;
    return axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log("User not found", error)});
  };
  
 

  module.exports = getUser;
  

  
  
  
  