/**
 * Userinfo의 테이블의 Auto Incrment가 적용된 ID를 재정렬하는 복합 Query문. 절차는 다음과 같다.
 * 1. 테이블 userinfo의 id를 제외한 모든 열의 데이터를 userinfo-temp라는 테이블을 생성해 복사 저장한다.
 *    사용 명령어 : CREATE TABLE <임시 테이블> AS SELECT <열1>, <열2>, <열3>, <열4> FROM <원본 테이블>
 * 2. TRUNCATE 명령어를 사용하여 userinfo의 모든 열 데이터를 지운다. 이때, 구조는 그대로 남는다.
 *    사용 명령어 : TRUNCATE <원본 테이블>
 * 3. temp에 복사한 데이터를 다시 userinfo에 저장한다. 이때 id는 PrimaryKey에 autoIncrment가 적용됬기에 자동생성된다.
 *    사용 명령어 : INSERT INTO <원본 테이블> ( <열1>, <열2>, <열3>, <열4> ) SELECT <열1>, <열2>, <열3>, <열4> FROM <임시 테이블>
 * 4. 복사가 완료되면 temp 테이블을 DROP한다.
 *    사용 명령어 : DROP TABLE <임시 테이블>
 * @returns Userinfo의 id를 refresh하는 것처럼 보이게 임시 복사 후 테이블 비우고 복사한 데이터를 1열부터 다시 기입, 끝나면 임시 데이터는 완전 삭제하는 Query문
 */
function refresh() {
  return `CREATE TABLE \`userinfo-temp\` AS SELECT \`user-id\`,\`user-pwd\`,\`user-emai\`,\`user-name\` FROM \`userinfo\`;
  TRUNCATE \`userinfo\`;
  INSERT INTO \`userinfo\`(\`user-id\`, \`user-pwd\`, \`user-email\`, \`user-name\`) SELECT \`user-id\`, \`user-pwd\`, \`user-email\`, \`user-name\` FROM \`userinfo-temp\`;
  DROP TABLE \`userinfo-temp\`;`
}
/**
 * UserInfo에 사용자를 추가하는 Query문. 사용자 정보를 UserInfo에 추가하는 쿼리문을 반환한다.
 * @param {String} uid 유저 아이디
 * @param {String} pwd 유저 암호
 * @param {String} uEmail 유저 이메일
 * @param {String} uName 유저 닉네임 
 * @returns UserInfo에 새로운 행을 추가하는 쿼리문
 */
function createUser(uid, pwd, uEmail, uName){
  return `INSERT INTO userinfo ( \`user-id\`, \`user-pwd\`, \`user-email\`, \`user-name\`) VALUES ('${uid}', '${pwd}', '${uEmail}', '${uName}')`;
}

/**
 * UserInfo에서 모든 유저정보를 가져오는 Query문
 * @returns UserInfo의 모든 정보를 출력하라는 쿼리문
 */
function readAll(){
  return`SELECT * FROM userinfo`;
}
/**
 * UserInfo에서 uid를 기준으로 사용자 정보를 출력하는 Query문
 * @param {String} uid 유저 아이디. 검색용
 * @returns SELECT *  WHERE user-id = `uid` 쿼리문
 */
function readUser(uid){
  return `SELECT * FROM userinfo WHERE \`user-id\`='${uid}'`;
}
// 
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 패스워드를 업데이트하는 Query문
 * @param {String} uid 유저 아이디. 검색용
 * @param {String} pwd 새로운 비밀번호.
 * @returns  비밀번호를 바꾸는 쿼리문
 */
function updatePassword(uid, pwd){
  return `UPDATE userinfo SET pwd = '${pwd}' WHERE \`user-id\` = '${uid}'`;
}
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 Email을 업데이트하는 Query문
 * @param {String} uid 유저 아이디, 검색용
 * @param {String} uEmail 새로운 이메일주소
 * @returns 이메일주소를 바꾸는 쿼리문
 */
function updateEmail(uid, uEmail){
  return `UPDATE userinfo SET \`user-email\` = '${uEmail} WHERE \`user-id\` = '${uid}'`;
}
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 닉네임을 업데이트하는 Query문
 * @param {String} uid 유저 아이디, 검색용
 * @param {String} uName 새로운 닉네임
 * @returns 닉네임을 바꾸는 쿼리문
 */
function updateName(uid, uName){
  return `UPDATE userinfo SET \`user-name\` = '${uName} WHERE \`user-id\` = '${uid}'`;
}
/**
 * UserInfo에서 사용자를 삭제하는 Query문
 * @param {String} uid 삭제할 유저의 아이디.
 * @returns  해당 유저 행을 삭제하는 쿼리문
 */
function deleteUser(uid){
  return `DELETE FROM userinfo WHERE \`user-id\`='${uid}'`;
}
// 모듈로 export할시 default로 나가는 함수들 구문
export default {createUser, readAll, readUser, updatePassword, updateEmail, updateName, deleteUser};