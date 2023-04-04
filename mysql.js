const mysql= require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'xxia1215@@',
  database : 'user'
});
 
connection.connect();
 
connection.query('SELECT * FROM users', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});
 
connection.end();