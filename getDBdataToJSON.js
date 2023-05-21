import sendQuery from "./src/mariadb.js";
import fs from "fs";

async function DBtoJSON(){
  const DBdata = {};
  const bookreview = await sendQuery(`SELECT * FROM \`bookstargram\`.\`bookreview\``);
  const userinfo = await sendQuery(`SELECT * FROM \`bookstargram\`.\`userinfo\``);
  DBdata.bookreview = bookreview;
  DBdata.userinfo = userinfo;
  fs.writeFileSync("./bookstargramDB2.json",JSON.stringify(DBdata));
} 

DBtoJSON();