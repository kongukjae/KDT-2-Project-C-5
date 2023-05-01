// const html=fs.readFileSync("../dist/index.html");
// const js=fs.readFileSync("../dist/main.js")
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/" && req.method === "GET") {
    const html = fs.readFileSync("../dist/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
  // res.writeHead(200,{"Content-Type":"text/html"})
  // res.end(html);
  if (res.url === "/main.js" && req.method === "GET") {
    const js = fs.readFileSync("../dist/main.js");
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(js);
  }
});

server.listen(3000, () => {
  console.log("서버 열림");
});
