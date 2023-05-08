import mariadb from 'mariadb';
import fs from 'fs';

import path from "path";
import url from "url";
// main_server.js의 절대경로를 path형태로 받아오는 구문(사용하는 컴퓨터마다 폴더 위치가 다르니 상대경로로 추적해야 한다.)
const currentPath = url.fileURLToPath(import.meta.url);
// main_server 파일이 있는 위치를 기준으로 '..'(상위폴더) 경로를 써서 root 폴더 경로를 지정하는 구문. /testArea 상위폴더가 root이기에 가능한 방법
const rootPath = path.join(currentPath, "\\..")
//assert {type:"json"}은 실험적 기능이라 하기에 fs을 사용하기로 함. 
//import poolSet from './dist/SQL' assert {type: "json"};

//모듈화 작업을 시작함.
/**
 * 마리아DB 모듈을 사용하여 쿼리를 보내는 모듈. 호출시 설정한 데이터베이스에 pool을 연결하고 DB에 query문을 한번 보내고 res에 그 응답을 받고 Promise 객체로 반환한다.. 이후 release()및 end()로 연결을 종료한다.
 * @param {*} query DB로 보낼 쿼리문, 문자열.
 * @returns 응답 내용을 담은 Promise 객체. `.then(res=>{})`을 써서 사용 위치에서 해당 내용을 다루면 되나, 지역변수로 끝나기에 응답내용을 다루려면 해당 res=>{} 안에서 작성해야한다.
 */
export default async function sendQuery(query) {
  let res;
  // dist의 SQL에서 mariadb용 pool 세팅을 가져옴.
  const poolSet = JSON.parse(fs.readFileSync(path.join(rootPath,"../dist/SQL.json"), "utf8"));
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
