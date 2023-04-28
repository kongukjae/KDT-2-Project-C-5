import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js'

bookstargramConnect(signUpQuery.createUser("human47", "abc47", "human47@email.net","휴먼47"))
.then(result=>{
  console.log(result);
  process.exit()
})
