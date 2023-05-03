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
        console.log("main.js if문 실행");
        const js=fs.readFileSync("../dist/main.js");
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.end(js);
    }

})

server.listen(3000,()=>{
    console.log("서버 열림");

<<<<<<< HEAD
})
=======
})
>>>>>>> 0bbcf6781f68dc5a7e1be06cf83286d30776fc68
