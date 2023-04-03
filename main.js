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
    console.log(req.method, req.url);

      if(req.method === 'GET' && req.url==='/'){ 
        const data =await fs.readFile(path.join(__dirname,'first.html'));
        console.log(__dirname);
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        return res.end(data);

        }
        // else if(req.method === 'GET' && req.url==='/login'){ 
        //   const data = await fs.readFile(path.join(__dirname,'login.html'));
        //   res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        //   return res.end(data);
         else if(req.method === 'POST' && req.url==='/login'){ 
          const data = await fs.readFile(path.join(__dirname,'login.html'));
          res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
          return res.end(data);
  
        }else if(req.method === 'GET' && req.url==='/signup'){
          const data = await fs.readFile(path.join(__dirname,'sign.html'));
          res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
          return res.end(data);
      }
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
  
  
}).listen(3000,'localhost',()=>{
  console.log('3000port');
})


