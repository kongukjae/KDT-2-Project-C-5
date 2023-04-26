  import http from 'http';
  import fs from 'fs';
  import url, { pathToFileURL } from 'url';
  import path from 'path';

  //console.log(path.__dirname)
  //console.log(path.__filename);
  //const fileURLone = pathToFileURL("./");
  //console.log(fileURLone);
  //console.log(import.meta.url);
  //console.log(fileURLone.toString());
  const testOne = url.parse("D:/dgchoi/KDT-2-Project-C-5/src/../dist/main.js");
  console.log(testOne.pathname)
  //상대경로를 쓴 것을 단순 절대경로로 치환해주는 함수 사용, path.resolve();
  console.log(path.resolve(testOne.pathname));
  //resolve로 절대경로로 변경한 것의 디렉토리를 출력하는 함수, dirname()
  console.log(path.dirname(path.resolve(testOne.pathname)));
  //testOne에 지정된 url의 basename, 파일 이름을 parse하여 출력하는 함수 basename();
  console.log(path.basename(testOne.pathname))
  //path.parse - 지정된 경로를 하나의 객체로 변환하는 함수. root와 dir, base, ext, name을 가진다.
  console.log(path.parse(import.meta.url));
  const testCode = fs.readFileSync(path.join(testOne.pathname));
  console.log(testCode.toString("utf8"));
  //console.log(testCode)