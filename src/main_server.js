import http from "http"
import fs from "fs"
import qs from "querystring"


// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const server = http.createServer(function (req, res) {

    console.log(req.url);
    console.log(req.method);
    if (req.method === "GET") {
        if (req.url === "/") {
            const html = fs.readFileSync("../dist/index.html");
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(html);
        }

        if (req.url === "/main.js") {
            console.log("main.js if문 실행");
            const js = fs.readFileSync("../dist/main.js");
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(js);
        }
    }
    if (req.method === "POST"){
        if (req.url === "/login"){
            req.on("data", chunk=>{
                const data = JSON.parse(chunk);
                console.log(data);
            })

        }
    }

    }
    if(req.url==="/src/img/star.png"&&req.method==="GET"){
        const starImg=fs.readFileSync("./img/star.png");
        res.end(starImg);
    }
})

server.listen(3000, () => {
    console.log("서버 열림");
})






