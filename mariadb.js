import mariadb from 'mariadb';
import fs from 'fs';
//createPool - 서버연동, 이것이 없으면 DB에 접근이 불가능하다.
const pool = mariadb.createPool({host :"localhost", user: "bookstargram", password:'qwe123', port:"3306", database:'bookstargram', connectionLimit: 5});
//
async function SQLConnection() {
  let conn;
  
  try {
    conn = await pool.getConnection();
    //await conn.query(`insert into htmltest(html_text) values ('${htmldata}')`);
    const res = await conn.query(`select * from userinfo`);
    console.log(res);

  } finally {
    if (conn){
      conn.release(); // pool을 해제
      conn.end();// pool을 종료
    } 
  }
}
SQLConnection();