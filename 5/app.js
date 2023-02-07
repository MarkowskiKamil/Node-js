const request = require("request");
const axios = require("axios");

const getUser = require('./user');
const getRepos = require('./repos');
const getFollowers = require('./followers');
const getWeather = require('./weather');
const userName = "octocat"

getUser(userName)
  .then((user) => {
    console.log("User name is " + user.login);
    return getRepos(user.login);
  })
  .then((repos) => {
    const reposNames = repos.map((n) => {
      return n.name;
    });
    console.log("Number of users repositories: " + repos.length);
    console.log("Users repositories: " + reposNames);
    return getFollowers(repos[0].owner.login);
  })
  .then((followers) => {
    const followersNames = followers.map((n) => {
      return n.login;
    });
    console.log("Number of users followers: " + followers.length);
    console.log("Users followers: " + followersNames)
    return getUser(userName) // Co tu wstawić
  })
  .then((user) => {
    return getWeather(user.location);
  })
  .then((weather) => {
    console.log(weather.main);
  })
  .catch((error) => {
    console.log(error);
  });
