import mariadb from 'mariadb';
import fs from 'fs';
import CRUD from './signUpCRUD.js';
//실험적 기능이기에 fs을 사용하기로 함. 
//import poolSet from './dist/SQL' assert {type: "json"};

//모듈화 작업을 시작함.
export default async function SQLConnection() {
  
  // dist의 SQL에서 mariadb용 pool 세팅을 가져옴.
  const poolSet = JSON.parse(fs.readFileSync("./dist/SQL.json", "utf8"));
  console.log(poolSet);
  // createPool - 서버연동, 이것이 없으면 DB에 접근이 불가능하다.
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
// 모듈 signupCRUD CRUD로 저장후, 적용되는지 테스트
//console.log(CRUD.createUser("dgchoi", "abc123", "dgchoi@email.com", "dgchoi"));

// Pool 세팅 SQL로 옮기고 fs로 파일 읽어오기. 되는지 테스트
//console.log(poolSet);

SQLConnection();
