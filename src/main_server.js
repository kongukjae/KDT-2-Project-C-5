import http from "http"
import fs from "fs"


// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const server=http.createServer(function(req,res){

    console.log(req.url);
    console.log(req.method);
    if(req.url === "/" && req.method === "GET") {
        const html=fs.readFileSync("../dist/index.html");
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(html);     
    }
    
    if(req.url==="/main.js" && req.method==="GET"){
        const js=fs.readFileSync("../dist/main.js");
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.end(js);
    }
    
    if(req.url==="/src/img/star.png"&&req.method==="GET"){
        const starImg=fs.readFileSync("./img/star.png");
        res.end(starImg);
    }

})

server.listen(3000,()=>{
    console.log("서버 열림");

})
