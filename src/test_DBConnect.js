import bookstargramConnect from './mariadb.js';
import signUpQuery from './signUpQuery.js'
import path from "path";
import url from "url";
const currentPath = url.fileURLToPath(import.meta.url);
const rootPath = path.normalize(currentPath + "\\..")

console.log(path.join(rootPath, "dist/root.json"));
console.log(rootPath);
console.log(currentPath);
// bookstargramConnect(signUpQuery.createUser("human47", "abc47", "human47@email.net","휴먼47"))
// .then(result=>{
//   console.log(result);
//   process.exit()
// })
