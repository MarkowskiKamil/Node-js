This repository contains exam tasks, that Ive made for my Exam in the Angular subject on the JavaScrit postgraduate studies on Bialystok University of Technology.
It contains 5 tasks.

First one should throw the stack overflow error, due to reccurency function used inside the app.

Second one returns the coloured array of letters and other signs. The application uses the npm colors module.

Fourth task (third one hasn't been done) should read number and filename from the data.json file and then download information about the number from the number api (http://numbersapi.com/{number}). The information is saved into the file, which name was read from data.json file. Operations are done asynchronously.

Fifth task is about downloading the information about the GitHub user using the api: https://api.github.com/. First of the user name is shown, than number of repos, than number and names of followers, and finally a description of weather in users location. Operations are done asynchronously. All functions are divided into modules.

Sixth task allows to keep tasks to do into the TODO list. We can put new tasks to the list and show content of the list. 
Operations are done asynchronously. All functions are divided into modules.
The examle call of app:
> node app.js dodaj "napisac program na zaliczenie z NodeJS"
> node app.js lista

