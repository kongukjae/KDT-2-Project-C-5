import fs from 'fs';
import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js';
import userInfo from './userinfo.js';

//사용자 정보를 가져와 HTML 테이블 형태로 뿌리는 구문.
let htmlData = fs.readFileSync("../src/index_test.html", "utf8");
let userData = "";
bookstargramConnect(signUpQuery.readAll())
.then(result=>{
    userData = userInfo(result);
    console.log(typeof userData);
    console.log(typeof htmlData)
    htmlData = htmlData.replace(`{{{user}}}`, userData);
    console.log(htmlData);
})