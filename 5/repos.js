const axios = require("axios");

const getRepos = (login) => {
    const url = `https://api.github.com/users/${login}/repos`;
    return axios.get(url)
    .then((response) => response.data)
    .catch(error => {
        console.log("Repos not found", error)});
  };

  module.exports = getRepos;