// Lets learn to solve Callback Hell using promises

// Remember water boiling in kitchen with timer(callbacks)
// VS
// Ordering Burger getting reciept (promises)
// ref: Coding with Chaim

const { rejects } = require('assert');
const fs = require('fs');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(`Coud not read file! ${file}`);
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Coud not write to file!');
      resolve('success!');
    });
  });
};

readFilePro('dog.txt')
  .then((data) => {
    console.log('Breed: ', data);
    let data1 = `${data}007`;
    return writeFilePro('dog1.txt', data1);
  })
  .then((res) => {
    console.log('dog1.txt get created!');
    return readFilePro('dog1.txt');
  })
  .then((ans) => {
    console.log(ans);
  })
  .catch((err) => {
    console.log(err);
  });
