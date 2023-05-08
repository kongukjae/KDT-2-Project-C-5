import path from "path";
import url from "url";
const currentPath = url.fileURLToPath(import.meta.url);
const rootPath = path.normalize(currentPath + "\\..")

console.log(path.join(rootPath, "dist/root.json"));
console.log(rootPath);
console.log(currentPath);