const http = require('http');



const server = http.createServer((req,res)=>{

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <p>login</p>
    <form action="/main.js">
	<p>
		<strong>아이디</strong>
		<input type="text" name="name" value="아이디 입력">
	</p>
	<p>
		<strong>비밀번호</strong>
		<input type="password" name="password" value="비밀번호 입력">
	</p>
  <p>
		<input type="submit" value="제출">
	</p>
  </form>
  </body>
  </html>
  `
  res.statusCode= 200;
  res.end(html);
});


server.listen(3000,'localhost',()=>{
  console.log('ok');
})


