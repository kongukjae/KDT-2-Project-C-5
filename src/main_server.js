import http from "http"
import fs from "fs"


// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const server = http.createServer(function (req, res) {

    console.log(req.url);
    console.log(req.method);
    if (req.url === "/" && req.method === "GET") {
        const html = fs.readFileSync("../dist/index.html");
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(html);
    }

    if (req.url === "/main.js" && req.method === "GET") {
        console.log("main.js if문 실행");
        const js = fs.readFileSync("../dist/main.js");
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(js);
    }
    if (req.url.startsWith("/favicon")) {
        let favicon;
        switch (true) {
            case req.url.endsWith("/16"):         
                favicon = fs.readFileSync("../dist/favicon/icons8-book-cute-color-16.png");
                break; 
            case req.url.endsWith("/32"):
                console.log("this is 32")
                favicon = fs.readFileSync("../dist/favicon/icons8-book-cute-color-32.png");
                break;
            case req.url.endsWith("/32"):
                console.log("this is 96")
                favicon = fs.readFileSync("../dist/favicon/icons8-book-cute-color-96.png");
                break;
        }
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(favicon);
    }

})

server.listen(3000, () => {
    console.log("서버 열림");

})
