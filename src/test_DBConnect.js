import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js'

bookstargramConnect(signUpQuery.readAll())
.then(result=>{
  console.log(result);
  process.exit()
})
