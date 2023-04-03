const http = require('http');
const mysql = require('mysql');
const path = require('path');
const url = require('url');
const fs = require('fs').promises;

const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'xxia1215@@',
  database : 'user'
});
db.connect();


// class user {
//   constructor(id, password, name, email){
//     this.id = id;
//     this.password = password;
//     this.name = name ;
//     this.email = email;

//   }
// }

const server = http.createServer(async(req,res)=>{
try {
  const data = await fs.readFile('./server.html');
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end(data);
} catch(err){
  console.log(err);
  res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
  res.end(err.message);
}


  // const path = url.parse(req.url, true).pathname;
  // const id = url.parse(req.url, true).query.id;


  // db.query(`select * from users`, function(err,users){
  //   console.log(users);
  // })
  
  
});

server.listen(3000,'localhost',()=>{
  console.log('3000port');
})


