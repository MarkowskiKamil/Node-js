/*10 punktów] Napisz aplikację pozwalającą na przechowywanie w pliku listy zadań do wykonania 
(klasyczna lista TODO). Aplikacja powinna pozwalać na dodanie do listy nowego zadania, 
jak również wyświetlić zawartość całej listy. Przy uruchomieniu bez parametrów aplikacja 
powinna informować o możliwych parametrach wywołania.

zapis/odczyt wykonuj asynchronicznie
pamiętaj o obsłudze błędów
poinformuj użytkownika o poprawności wykonanych operacji
wydziel odczyt i zapis informacji do osobnych modułów
Sugeruje użyć modułu yargs z konstrukcją yargs.command.

Przykład wywołania programu:

> node app.js dodaj "napisac program na zaliczenie z NodeJS"*/

const yargs = require("yargs");
const saveFile = require('./saveFile');
const readList = require('./readList');
const initialReadList = require('./initialRead')

const fileName = "TODOlist.json";


const addTaskToList = (list) => {
  yargs.command({
    command: "addTask",
    describe: "Adds new task to TODO list",
    builder: {
      newTask: {
        describe: "Task",
        demandOption: true,
        type: "string",
      },
      handler(argv) {
        return (list += list.push(argv.newTask));
      },
    },
  });
};

yargs.parse();

initialReadList(fileName)
  .then((list) => {
    return addTaskToList(list);
  })
  .then((list) => {
    return saveFile(fileName, list);
  })
  .then((fileName) => {
    return readList(fileName);
  })
  .then((tasksFromList) => {
    console.log(tasksFromList);
  })
  .then(() => {
    console.log("Succes. New Task added to list.");
  })
  .catch((error) => {
    console.log(error);
  });

 