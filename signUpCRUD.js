function createUser(uid, pwd, uEmail, uName){
  return `INSERT INTO userinfo ( 'user-id', 'user-pwd', 'user-email', 'user-name') VALUES ('${uid}', '${pwd}', '${uEmail}', '${uName}')`;
}
function readUser(uid){
  return `SELECT * FROM userinfo WHERE \`user-id\`='${uid}'`;
}

function updatePassword(uid, pwd){
  return `UPDATE userinfo SET pwd = '${pwd}' WHERE \`user-id\` = '${uid}'`;
}

function updateEmail(uid, uEmail){
  return `UPDATE userinfo SET \`user-email\` = '${uEmail} WHERE \`user-id\` = '${uid}'`;
}

function updateName(uid, uName){
  return `UPDATE userinfo SET \`user-name\` = '${uName} WHERE \`user-id\` = '${uid}'`;
}
function deleteUser(uid){
  return `DELETE FROM userinfo WHERE \`user-id\`='${uid}'`;
}

export default {createUser, readUser, updatePassword, updateEmail, updateName, deleteUser};