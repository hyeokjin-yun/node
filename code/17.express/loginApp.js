const express = require('express');
const process = require('process');
const path = require('path');

const app = express();
let memberList = []

//path root 이면 welcome 메세지 출력
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/login', (req, res) => {
  // console.log(path.join(__dirname,'login.html'));
  // console.log(path.join(process.cwd(),'login.html'));
  res.sendFile(path.join(__dirname,'login.html'));
});

app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname,'join.html'));
});

//use는 실행
//미들웨어들은 체이닝이 이뤄진다.
app.use(express.json())//json 형태로 받은 body 데이터를 해석하기 위해 사용
app.use(express.urlencoded({extended:true}))//form으로 제출되는 값은 x-www-form-urlencoded형태로 express.urlencoded를 통해 해석

app.post('/login', (req, res) => {
  const {id, pass} = req.body;//form을 통해 넘어오는 모든 데이터는 name값과 일치
  let result = 0;

  /////////////////////////////////////////////////////////////차후 DB에서 이뤄짐
  //memberList에서 id, pass 일치하면 -> 1, 일치하지 않으면 -> 0
  for(let i = 0;i < memberList.length;i++){
    let member = memberList[i];
    if(id === member.id && pass === member.pass) {
      result = 1;
      i = memberList.length;//break;
    }
  }
  /////////////////////////////////////////////////////////////차후 DB에서 이뤄짐
  
  if(result === 1) {
    //로그인 성공 -> index.html
    res.redirect('/');
  }else{
    //로그인 실패 -> loginFail.html
    res.sendFile(path.join(__dirname,'loginFail.html'));
    //res.redirect('/error')
  }
});

app.post('/join',(req, res) => {
  const {name, id, pass, address} = req.body;
  memberList.push({name, id, pass, address});
  res.redirect('/');
});

app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname,'error.html'));//만들어놓고 내부에 있는 미들웨어가 redirect를 통해 호출하여 사용
});

app.listen(8080);