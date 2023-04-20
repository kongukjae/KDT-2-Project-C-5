import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js'

console.log(bookstargramConnect(signUpQuery.readAll()));