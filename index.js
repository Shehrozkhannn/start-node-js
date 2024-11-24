const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=> {
  const log = `${Date.now()}: ${req.url}  new request recieved\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl)
  fs.appendFile('log.txt',log,(err,data)=>{
    res.end('Hello from server')
  })
});

server.listen(8000,()=>console.log('SERVER STARTED!'));