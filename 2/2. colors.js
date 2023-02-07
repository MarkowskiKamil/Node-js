const colors = require("colors");
const myArray = "abcdefgh123";

// Przykładowe wywołanie: getRainbow (myArray)
const getRainbow = (Arr) => {
  if (Arr) {
    return Arr.rainbow;
  } else {
    throw new Error('Something is wrong!');
  }
};

console.log(getRainbow(myArray));
// Example solution: abcdefgh123
