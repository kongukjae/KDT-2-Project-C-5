/**
 * UserInfo에 사용자를 추가하는 Query문. 사용자 정보를 UserInfo에 추가하는 쿼리문을 반환한다.
 * @param {*} uid 유저 아이디
 * @param {*} pwd 유저 암호
 * @param {*} uEmail 유저 이메일
 * @param {*} uName 유저 닉네임 
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
 * @param {*} uid 유저 아이디. 검색용
 * @returns SELECT *  WHERE user-id = `uid` 쿼리문
 */
function readUser(uid){
  return `SELECT * FROM userinfo WHERE \`user-id\`='${uid}'`;
}

// 
/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 패스워드를 업데이트하는 Query문
 * @param {*} uid 유저 아이디. 검색용
 * @param {*} pwd 새로운 비밀번호.
 * @returns  비밀번호를 바꾸는 쿼리문
 */
function updatePassword(uid, pwd){
  return `UPDATE userinfo SET pwd = '${pwd}' WHERE \`user-id\` = '${uid}'`;
}

/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 Email을 업데이트하는 Query문
 * @param {*} uid 유저 아이디, 검색용
 * @param {*} uEmail 새로운 이메일주소
 * @returns 이메일주소를 바꾸는 쿼리문
 */
function updateEmail(uid, uEmail){
  return `UPDATE userinfo SET \`user-email\` = '${uEmail} WHERE \`user-id\` = '${uid}'`;
}

/**
 * UserInfo에서 uid를 기준으로 해당 사용자의 닉네임을 업데이트하는 Query문
 * @param {*} uid 유저 아이디, 검색용
 * @param {*} uName 새로운 닉네임
 * @returns 닉네임을 바꾸는 쿼리문
 */
function updateName(uid, uName){
  return `UPDATE userinfo SET \`user-name\` = '${uName} WHERE \`user-id\` = '${uid}'`;
}

/**
 * UserInfo에서 사용자를 삭제하는 Query문
 * @param {*} uid 삭제할 유저의 아이디.
 * @returns  해당 유저 행을 삭제하는 쿼리문
 */
function deleteUser(uid){
  return `DELETE FROM userinfo WHERE \`user-id\`='${uid}'`;
}

// 모듈로 export할시 default로 나가는 함수들 구문
export default {createUser, readAll, readUser, updatePassword, updateEmail, updateName, deleteUser};