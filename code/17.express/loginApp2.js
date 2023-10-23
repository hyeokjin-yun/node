const express = require('express');
const path = require('path');
const app = express();

const memberList = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/join', (req, res) => {
  res.sendFile(path.join(__dirname,'join.html'))
})

app.get('/loginFail',(req,res) => {
  res.sendFile(path.join(__dirname,'loginFail.html'))
});

app.get('/error',(req,res) => {
  res.sendFile(path.join(__dirname,'error.html'))
});


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post('/join',(req, res) => {
  const {name, id, pass, address} = req.body;
  memberList.push({name,id,pass,address});
  res.redirect('/');
});

app.post('/login', (req, res) => {
  const {id, pass} = req.body;
  let result = 0;

  for(let i = 0;i < memberList.length;i++) {
    let member = memberList[i];
    if(id === member.id && pass === member.pass) {
      result = 1;
      i = memberList.length;
    }
  }

  if(result === 1) {
    res.redirect('/');
  }else{
    res.redirect('/loginFail');
  }

}); 


app.listen(3000);