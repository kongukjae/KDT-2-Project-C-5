// import http from "http"
// import fs from "fs"


// // const html=fs.readFileSync("../dist/index.html");
// // const js=fs.readFileSync("../dist/main.js")
// const server=http.createServer(function(req,res){

//     console.log(req.url);
//     console.log(req.method);
//     if(req.url === "/" && req.method === "GET") {
//         const html=fs.readFileSync("../dist/index.html");
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(html);     
//     }
    
//     if(req.url==="/main.js" && req.method==="GET"){
//         console.log("main.js if문 실행");
//         const js=fs.readFileSync("../dist/main.js");
//         res.writeHead(200,{"Content-Type":"text/javascript"});
//         res.end(js);
//     }

// })

// server.listen(3000,()=>{
//     console.log("서버 열림");

// })
import http from "http";
import fs from "fs";
import mariadb from "mariadb";
import querystring from "querystring";

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "bookstagram",
    port: 3307,
    allowPublicKeyRetrieval: true
});

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/" && req.method === "GET") {
    const html = fs.readFileSync("../dist/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }

  if (req.url === "/main.js" && req.method === "GET") {
    console.log("main.js if문 실행");
    const js = fs.readFileSync("../dist/main.js");
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(js);
  }

  if (req.url === "/login" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { id, pwd } = querystring.parse(body);
      const conn = await pool.getConnection();
      const rows = await conn.query(
        "SELECT * FROM userinfo WHERE `user-id`=? AND `user-pwd`=?",
        [id, pwd]
      );
      conn.release();
      if (rows.length > 0) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Login success");
      } else {
        res.writeHead(401, { "Content-Type": "text/plain" });
        res.end("Login failed");
      }
    });
  }
});

server.listen(3000, () => {
  console.log("서버 열림");
});
