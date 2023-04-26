import http from 'http';
import fs from 'fs';
import url, { pathToFileURL } from 'url';
import path from 'path';

console.log(path.__dirname)
console.log(path.__filename);
const fileURLone = pathToFileURL("./");
console.log(fileURLone);
console.log(import.meta.url);