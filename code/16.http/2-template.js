const http = require('http');
const fs = require('fs');
const ejs = require('ejs');//ejs는 html과 json만 지원하므로 실제로는 잘 이용하지 않는다.

const name = 'hong';

let courses = [
  {name : 'Node.js'},
  {name : 'CSS'},
  {name : 'JavaScript'},
  {name : 'HTML'},
];

let scoreList = [
  {name : 'HTML', grade : 'A'},
  {name : 'CSS', grade : 'B'},
  {name : 'JavaScript', grade : 'B'},
  {name : 'Node.js', grade : 'A'},
]

//서버 생성 : port 3000
console.log('----------Server Start----------');
const server = http.createServer((req, res) => {
  console.log('incoming...');
  
  //1. 클라이언트 요청 URL 받아옴 
  const url = req.url;

  //2. 클라이언트 전송타입
  res.setHeader('Content-Type','text/html') //현재 전송하는 타입은 html 문서

  //3. 패스 체크 : / --> index.ejs
  if(url === '/') {
    //4. ejs.renderFile(매개변수) <= 프로미스 타입 처리
    ejs.renderFile('./template/index.ejs', {name})
    .then(data => res.end(data))
    .catch(console.error);

  }else if (url === '/courses') {
    ejs.renderFile('./template/courses.ejs', {courses})
    .then(data => res.end(data))
    .catch(console.error);
  }else if (url === '/score') {
    ejs.renderFile('./template/score.ejs',{scoreList})
    .then(data => res.end(data))
    .catch(console.error);
  }else {
    //패스가 다르면 --> File Not Fount hong
    ejs.renderFile('./template/error.ejs', {name})
    .then(data => res.end(data))
    .catch(console.error);
  }


});
server.listen(3000);