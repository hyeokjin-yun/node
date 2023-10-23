import express from 'express';

//const app = express(); 서버는 반드시 하나이며, 다시 서버를 선언하면 기존 서버가 초기화되어 버린다.
const router = express.Router();

router.get('/', (req, res, next) => {
  //console.log('first');
  //next();//다음 콜백함수를 실행한다. 다음 콜백함수가 없으면 다음 미들웨어를 실행한다.
  res.send('GET : /');
  },
  (req, res, next) => {
    console.log('second');
  }
)
.post('/', (req, res, next) => {
  res.send('POST : /')
})
.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.send(`PUT : /:id -> ${id}`)
})
.delete('/:id/:name/:address', (req, res, next) => {
  const {id, name, address} = req.params;
  res.send(`DELETE : /:id -> ${id} , ${name} , ${address}`)
})

export default router;