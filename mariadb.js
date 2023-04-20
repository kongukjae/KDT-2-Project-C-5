import mariadb from 'mariadb';
import fs from 'fs';

//실험적 기능이기에 fs을 사용하기로 함. 
//import poolSet from './dist/SQL' assert {type: "json"};

//모듈화 작업을 시작함.
/**
 * 마리아DB 모듈을 사용하여 쿼리를 보내는 모듈. 호출시 설정한 데이터베이스에 pool을 연결하고 DB에 query문을 한번 보내고 res에 그 응답을 받고 Promise 객체로 반환한다.. 이후 release()및 end()로 연결을 종료하고 
 * @param {*} query DB로 보낼 쿼리문, 문자열.
 * @returns 응답 내용을 담은 Promise 객체. `.then(res=>{})`을 써서 사용 위치에서 해당 내용을 다루면 된다.
 */
export default async function bookstargramConnect(query) {
  let res;
  // dist의 SQL에서 mariadb용 pool 세팅을 가져옴.
  const poolSet = JSON.parse(fs.readFileSync("./dist/SQL.json", "utf8"));
  // createPool - 서버연동, 이것이 없으면 DB에 접근이 불가능하다.
  const pool = mariadb.createPool(poolSet.mariadb);
  let conn;
  try {
    conn = await pool.getConnection();
    //await conn.query(`insert into htmltest(html_text) values ('${htmldata}')`);
    res = await conn.query(query);
    //console.log(res);
    return res;
    

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

//테스트 구문
//bookstargramConnect(CRUD.readAll());
