import http from 'http';
import fs  from 'fs';

const server = http.createServer((request, response)=> {
  if(request.method === 'GET'){
    if(request.url === '/'){
      response.writeHead(200, {'Content-type':'text/HTML'});
      response.write(fs.readFileSync('./first.html','utf8'));
      response.end;
    }
  }
})
server.listen(3000, err=>{
  if(err){
    console.error(`에러, (${err})가 발생했습니다.`);
  } else {
    console.log("포트 3000으로 연결합니다.")
  }
})