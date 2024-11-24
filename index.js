const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
  const log = `${Date.now()}: ${req.url}  new request recieved\n`
  fs.appendFile('log.txt',log,(err,data)=>{
    res.end('Hello from server')
  })
});

server.listen(8000,()=>console.log('SERVER STARTED!'));