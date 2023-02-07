/*Przykład wywołania programu:
> node app.js dodaj "napisac program na zaliczenie z NodeJS"
> node app.js lista*/

const yargs = require("yargs");
const readList = require("./readList");
const saveFile = require("./saveFile");
const fileName = "TODOlist.json";

yargs
  .command({
    command: "dodaj",
    handler: async (argv) => {
      await saveFile(fileName, argv, { flag: 'a+' });
      console.log("New task added succesfully. ");
    },
  })
  .command({
    command: "lista",
    handler: async () => {
      const list = await readList(fileName);
      console.log(list)
    },
  })
  .demandCommand()
  .help()
  .argv;
