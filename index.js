const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplates = require('./modules/replaceTemplates.js');
const slugify = require('./node_modules/slugify');

////////////////////////////////////////////////////////
// File System Module

// -------------------- Blocking and non-blocking code

// Synchronous code is Blocking code (executes line by line)
// NodeJS works on single threaded I/O model (while php works on multithread)
// But using so much callback functions with Async non blocking code in nodejs
// gets messy :(
// Thats why we use Promises or Async/await

// Blocking synchronous way -->

// const fs = require('fs');
// const mytxt = fs.readFileSync('./txt/input.txt','utf8');
// fs.writeFileSync('./txt/output.txt', mytxt);
// console.log("file written!");

// non-blocking Asynchronous way -->

// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`, 'utf-8', err=>{
//                 console.log("file written!");
//             })
//         })
//     })
// })

// console.log("Reading file...");

////////////////////////////////////////////////////////
// Server Module

// Reading data only once
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');
const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);
const product = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const prodData = JSON.parse(data);

const slugs = prodData.map((ele) => slugify(ele.productName, { lower: true }));
// console.log(slugs);

// this callback func runs everytime when there is new request
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname == '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    let cardHtml = prodData.map((ele) => {
      // we get array of htmlcode for each prod card
      return replaceTemplates(card, ele);
    });

    // relpace it into one html string
    cardHtml = cardHtml.join('');

    const op = overview.replace('{%PRODUCT_CARD%}', cardHtml);

    res.end(op);
  } else if (pathname === '/product') {
    const prod = prodData[query.id];
    const op = replaceTemplates(product, prod);
    res.end(op);
    // res.end("This is PRODUCT");
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    // ^ used to send meta response
    res.writeHead(404, {
      myheader: 'yha se chala jaa!',
      'Content-type': 'text/html',
    });
    res.end(`<h1>No Page Found!</h1>`);
  }
});

server.listen(5002, () => {
  console.log('Listening to requests on port 5002');
});
