const fs = require('fs');


// SYNCRNONUS CALL
// fs.writeFileSync('./test.txt', 'Hey there');
// ASYNC

// fs.writeFile('./test.txt', 'Hey there', (err)=> {});

// const result = fs.readFileSync('./test.txt',"utf-8");
// console.log(result)


fs.readFile('./test.txt',"utf-8",(err,res)=> {
  if(err){
    console.log("ERROR",err)
  }else {
    console.log(res)
  }
});

fs.appendFile('./test.txt', new Date().getDate().toLocaleString(), (res,err)=> {
  if(err){
    console.log('EROOR',err)
  }else{
    console.log(res)
  }
})
