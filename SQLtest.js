import bookstargramConnect from './bookstargramDB.js';
import signUpQuery from './signUpQuery.js';
//설정한 DB와 연결되어있는지 테스트하기 위해 작성한 구문. 콘솔에 현 UserInfo가 출력된다.
bookstargramConnect(signUpQuery.readAll()).then(res=>{console.log(res)});