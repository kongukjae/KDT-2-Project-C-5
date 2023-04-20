/**
 * 북스타그램 DB에 연결 및 
 */
import bookstargramConnect from './bookstargramDB.js';
import signUpQuery from './signUpQuery.js';


bookstargramConnect(signUpQuery.readAll()).then(res=>{console.log(res)});