import mariaDB from "mariaDB";
async function main() {
  let conn;
  try {
    conn = await mariaDB.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "bookstagram",
      port: 3307,
      allowPublicKeyRetrieval: true
    });
    const rows = await conn.query("SELECT * FROM userinfo");
    console.log(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}
main();