import mariaDB from "mariadb";
import http, { createServer } from "http";

async function main() {
  let conn;
  try {
    conn = await mariaDB.createConnection({
      host: "localhost",
      user: "root",
      password: "1234",
      database: "bookstargram",
    });
    const userinfo = await conn.query("SELECT * FROM userinfo");

    return userinfo;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

const server = createServer(async function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const data = await main(); // main() 함수에서 data 받기
  res.write(JSON.stringify(data)); // JSON 형식으로 data 작성
  //[{"id":8,"user-id":"jieun","user-pwd":"1234","user-email":"jieun@email.com","user-name":"jiny"}]

  res.end();
});

server.listen(3000);
