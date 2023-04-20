// UserInfo에 사용자를 추가하는 Query문
function createUser(uid, pwd, uEmail, uName){
  return `INSERT INTO userinfo ( 'user-id', 'user-pwd', 'user-email', 'user-name') VALUES ('${uid}', '${pwd}', '${uEmail}', '${uName}')`;
}
// UserInfo에서 uid를 기준으로 사용자 정보를 출력하는 Query문
function readUser(uid){
  return `SELECT * FROM userinfo WHERE \`user-id\`='${uid}'`;
}
// UserInfo에서 uid를 기준으로 해당 사용자의 패스워드를 업데이트하는 Query문
function updatePassword(uid, pwd){
  return `UPDATE userinfo SET pwd = '${pwd}' WHERE \`user-id\` = '${uid}'`;
}
// UserInfo에서 uid를 기준으로 해당 사용자의 Email을 업데이트하는 Query문
function updateEmail(uid, uEmail){
  return `UPDATE userinfo SET \`user-email\` = '${uEmail} WHERE \`user-id\` = '${uid}'`;
}
// UserInfo에서 uid를 기준으로 해당 사용자의 닉네임을 업데이트하는 Query문
function updateName(uid, uName){
  return `UPDATE userinfo SET \`user-name\` = '${uName} WHERE \`user-id\` = '${uid}'`;
}
// UserInfo에서 사용자를 삭제하는 Query문
function deleteUser(uid){
  return `DELETE FROM userinfo WHERE \`user-id\`='${uid}'`;
}
// 모듈로 export할시 default로 나가는 함수들 구문
export default {createUser, readUser, updatePassword, updateEmail, updateName, deleteUser};