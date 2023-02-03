const http = require('http');
const fs = require('fs');
const superagent = require('./node_modules/superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf8', (err, data) => {
  console.log(data);
  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
        if(err)console.log(err);
        console.log(res.body);
    });
});

// const server = http.createServer();
