const fs = require('fs');
const http = require('http');
const url = require('url');

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

const server = http.createServer((req,res)=>{
    const Path = req.url;

    if(Path === '/' || Path == '/home'){
        res.end("This is a HOMEPAGE");
    }else if(Path === '/product'){
        res.end("This is PRODUCT");
    }else{
        // ^ used to send meta response 
        res.writeHead(404, {
            'myheader':'yha se chala jaa!'
        })

        res.end(`<h1>No Page Found!</h1>`);
    }
})

server.listen(5000, ()=>{
    console.log("Listening to requests on port 5000");
});





