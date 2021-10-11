const {readFile} = require('fs')

console.log('Starting a first task');
// CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed first task');
})
console.log('Starting next task');

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const { resolve } = require("path");
// const path = require("path");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile("./content/first.txt", "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt").then((result) =>
//   console.log(result)).catch((err) => console.log(err)
// );
