const axios = require("axios");

const getFollowers = (login) => {
  const url = `https://api.github.com/users/${login}/followers`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.log("Followers nor found", error);
    });
};

module.exports = getFollowers;
