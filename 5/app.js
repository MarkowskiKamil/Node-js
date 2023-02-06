/*[10 punktów] Stwórz aplikację która pobierze z GitHuba informacje o użytkowniku i 
jego repozytoriach. 
Dodatkowo sprawdź aktualną pogodę w lokalizacji użytkownika.

w parametrach uruchomienia jest podawany login użytkownika oraz opcjonalnie informacja 
czy wyświetlać liczbę śledzących użytkownika, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).
wyświetl nazwę użytkownika (name)
wyświetl liczbę śledzących użytkownika (followers) - tylko jeżeli użyto odpowiedniego 
parametru przy uruchomieniu aplikacji
wyświetl liczbę repozytoriów
wyświetl nazwy repozytoriów (name)
wyświetl opis pogody (weather.main, weather.description) w lokalizacji użytkownika 
(location - zwraca GitHub w danych użytkownika)
żądania do API wysyłaj asynchronicznie
pamiętaj o obsłudze błędów
podziel rozwiązanie na moduły*/

const request = require("request");
const axios = require("axios");

const getUser = require('./user');
const getRepos = require('./repos');
const getFollowers = require('./followers');
const getWeather = require('./weather');
const userName = "octoat"

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
