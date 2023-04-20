import mariadb from 'mariadb';
import fs from 'fs';
import CRUD from './signUpCRUD.js';
import poolSet from './dist/SQL.json' assert {type: "json"};

//밖으로 옮겨 모듈화 작업을 시작함.
export default async function SQLConnection() {
  //createPool - 서버연동, 이것이 없으면 DB에 접근이 불가능하다.
  
  const pool = mariadb.createPool(poolSet.mariadb);
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
//모듈 signupCRUD CRUD로 저장후, 적용되는지 테스트
console.log(CRUD.createUser("dgchoi", "abc123", "dgchoi@email.com", "dgchoi"));
console.log(poolSet);