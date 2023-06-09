import http from "http";
import fs from "fs";
import path from "path";
import url, { fileURLToPath } from "url";
import mysql from "mysql";
import formidable from "formidable";

const __srcname = path.dirname(fileURLToPath(import.meta.url));
const __rootname = path.join(__srcname, "..");
console.log(__rootname);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "xxia1215@@",
  database: "bookstagram",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("DB 연결 성공");
});

//연결 성공

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);
  // "/" index.html
  if (req.url === "/" && req.method === "GET") {
    const html = fs.readFileSync(path.join(__rootname, "dist", "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
  //main.js
  if (req.url === "/main.js" && req.method === "GET") {
    const js = fs.readFileSync(path.join(__rootname, "dist", "main.js"));
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(js);
  }
  //login
  if (req.method === "POST") {
    if (req.url === "/login") {
      formidable().parse(req, (err, fields) => {
        if (err) {
          console.error(err);
          return;
        }
        //1.
        // const id = `fields.user-id`;
        // const password = `fields.user-pwd`;
        // console.log(`id: ${id}, password: ${password}`);
        //2.
        // const id = fields["user-id"];
        // const password = fields["user-pwd"];
        // console.log(`id: ${id}, password: ${password}`);
        //3.
        const { "user-id": id, "user-pwd": password } = fields;
        console.log(`id: ${id}, password: ${password}`);
      });
    }
  }
});

// DB에서 해당 사용자의 정보를 조회하여 비밀번호를 비교하고 로그인 여부를 결정한다.
//         connection.query(
//           `SELECT * FROM usersinfo WHERE user-id='${id}'`,
//           (error, results) => {
//             if (error) {
//               console.error(error);
//               res.statusCode = 500;
//               res.end("Internal Server Error");
//               return;
//             }

//             if (results.length === 0) {
//               // 사용자 정보가 없는 경우
//               console.log("User not found");
//               res.statusCode = 401;
//               res.end("Unauthorized");
//               return;
//             }

//             // 사용자 정보가 있는 경우, 비밀번호를 비교하여 로그인 여부를 결정한다.
//             const user = results[0];
//             if (user.password !== password) {
//               console.log("Invalid password");
//               res.statusCode = 401;
//               res.end("Unauthorized");
//               return;
//             }

//             // 로그인 성공

//             console.log("Login success");
//             res.statusCode = 200;
//             res.end("Login success");
//           }
//         );
//       });
//     }
//   }
// });

server.listen(3000, () => {
  console.log("서버 열림");
});
