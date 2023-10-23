// 1. 주소록(address) 배열 객체 생성
// 2. POST 방식으로 이름,주소를 입력 받아 address에 추가
// 3. GET 방식으로 주소록(address) 확인
// postman으로 테스트

const http = require('http');

const address = [];

// const server = http.createServer((req,res) => {
//   const url = req.url;
//   const method = req.method;

//   if(url === '/address') {
//     if(method === 'GET'){
//       const strAddress =  JSON.stringify(address);
//       res.writeHead(200, {
//         'Content-Length' : Buffer.byteLength(strAddress),
//         'Content-Type' : 'application/json'
//       })
//       .end(strAddress);
//     }else if(method === 'POST') {
//       const body = []
//       req.on('data', (chunk) => {
//         body.push(chunk);
//       });

//       req.on('end', () => {
//         const bodyStr = Buffer.concat(body).toString();
//         const newAddress = JSON.parse(bodyStr);
//         address.push(newAddress);
//         res.writeHead(201);
//         res.end();
//       });
//     }
//   }else{
//     res.write('Not Found Page')
//     res.end();
//   }
// });

// server.listen(3000)

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/address') {
    if(method === 'GET') {
      if(address.length !== 0) {
        res.writeHead(200, {
          'Content-Type' : 'application/json',
        })
        .end(JSON.stringify(address)); 
      }else{
        res.end('No Data');
      }
    }else if(method === 'POST') {
      const body = [];
      req
        .on('data', chunk => {//버퍼에 담겨 넘어오는 데이터 처리
          body.push(chunk);
        })
        .on('end', () => {
          const bodyStr = Buffer.concat(body).toString();
          const jsonStr = JSON.parse(bodyStr);
          address.push(jsonStr);
          res.writeHead(201).end();
        });
    }
  }else{
    res.end('Page Not Found');
  }

});

server.listen(9000);