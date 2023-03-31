const http = require('http');



const server = http.createServer((req,res)=>{
  res.statusCode= 200;
  res.end();
});


server.listen(3000,'localhost',()=>{
  console.log('ok');
})