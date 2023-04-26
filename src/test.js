import http from 'http';
import fs from 'fs';
import url, { pathToFileURL } from 'url';
import path from 'path';

//console.log(path.__dirname)
//console.log(path.__filename);
//const fileURLone = pathToFileURL("./");
//console.log(fileURLone);
//console.log(import.meta.url);
//console.log(fileURLone.toString());
const testOne = url.parse("D:/dgchoi/KDT-2-Project-C-5/src/../dist/main.js");
console.log(testOne.pathname)
console.log(testOne);
const testCode = fs.readFileSync(testOne.pathname);
console.log(testCode.toString("utf8"));