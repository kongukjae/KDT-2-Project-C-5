import sendQuery from "./src/mariadb.js";
import fs from "fs";

  let result = await sendQuery("SELECT * FROM bookreview");
  console.log(result);

  const bookstargramDB = {};
  bookstargramDB.bookreview = result;
  result = await sendQuery("SELECT * from userinfo")
  bookstargramDB.userinfo = result;

  fs.writeFileSync("./bookstargramDB.json", JSON.stringify(bookstargramDB), {"Content-Type":"application/json"});
  process.exit();

