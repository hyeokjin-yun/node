const express = require('express');
const server = express();

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Node' },
  { name: 'Express' },
]

///////////////////////////////////하나의 익스프레스 미들 웨어
server.get('/', (req, res) => {
  res.send('Hello World');
});
///////////////////////////////////체이닝이 가능하다

server.get('/course', (req, res) => {
  res.setHeader('Content-Type','application/json');
  res.status(200);
  res.json(courses);
});

server.post('/course', (req, res) => {
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  })
  req.on('end', () => {
    courses.push(JSON.parse(Buffer.concat(body).toString()));
    res.status(201).end();
  })
})

server.listen(3300);