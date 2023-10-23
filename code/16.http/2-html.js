const http = require('http');
const fs = require('fs');

//192.168.50.13
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  res.setHeader('Content-Type','text/html')
  if(url === '/') {
    fs.createReadStream('./test/main.html').pipe(res);
  }else if( url === '/courses'){
    fs.createReadStream('./test/courses/courses.html').pipe(res);
  }else if(url === '/login'){
    fs.createReadStream('./test/login/login.html').pipe(res);
  }else{
    fs.createReadStream('./test/error.html').pipe(res);
  }
});

server.listen(9000);