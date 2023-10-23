const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Node' },
  { name: 'Express' },
]

//서버생성
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/courses') {
    if(method === 'GET') {
      const strCourses = JSON.stringify(courses);//json 데이터를 보낼 때 문자열로 변환하여 보내야 한다.
      res.writeHead(200, {
        'Content-Length' : Buffer.byteLength(strCourses),//넘기는 파일이 몇 바이트인지 나타내나?
        'Content-Type' : 'application/json',//넘기는 파일이 json파일임을 나타낸다.
      })
      .end(strCourses);
    }else if (method === 'POST'){
      //POST 방식으로 요청이 오면 -> JSON 데이터 받기
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });

      req.on('end', () => {
        //body의 데이터를 string 타입으로 변환
        const bodyStr = Buffer.concat(body).toString();
        //string 문자열을 JSON 객체로 파싱
        const newCourse = JSON.parse(bodyStr);
        //courses 배열에 추가
        courses.push(newCourse);
        //결과 전송
        res.writeHead(201);
        res.end();
      });

    }
  } else {
    res.write('File Not Found');
    res.end();
  }

});

//서버 리스닝
server.listen(8080);