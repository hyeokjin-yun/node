import express from 'express';

const router = express.Router();

router
.get('/', (req,res,next) => {
  res.send('GET : /');
})
.post('/', (req,res,next) => {
  const {name,address} = req.body
  res.send(`POST : / -> ${name} , ${address}`)
})
.put('/:id', (req,res,next) => {
  res.send(`PUT : /test -> ${req.params.id}`)
})
.delete('/:id', (req,res,next) => {
  res.send(`PUT : /test -> ${req.params.id}`)
})

export default router;