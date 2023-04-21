const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // POST 요청 처리
  if (req.method === "POST" && req.url === "/signup.php") {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 - Internal Server Error");
      } else {
        // fields 변수에는 입력받은 데이터가 객체 형태로 저장되어 있음
        // files 변수에는 업로드한 파일이 객체 형태로 저장되어 있음
        console.log("fields:", fields);
        console.log("files:", files);

        // 파일 업로드 경로 설정
        const uploadDir = path.join(__dirname, "uploads");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
        }

        // 파일 업로드
        for (const file of Object.values(files)) {
          const oldPath = file.path;
          const newPath = path.join(uploadDir, file.name);
          fs.renameSync(oldPath, newPath);
        }

        // 응답
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Thank you for signing up!");
      }
    });
  } else {
    // GET 요청 처리
    if (req.url === "/" || req.url === "/signup.html") {
      const filePath = path.join(__dirname, "signup.html");
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 - Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
