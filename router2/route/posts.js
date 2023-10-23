import express from 'express';

const router = express.Router();

router
.get('/', (req, res, next) => {
  res.send('GET : /posts')
})
.post('/', (req, res, next) => {
  const {name, address} = req.body;
  res.status(201).send(`POST : /posts -> ${name} , ${address}`)
})
.put('/   :id/:name', (req, res, next) => {
  const {id,name} = req.params;
  res.send(`PUT : /posts.test -> ${id} , ${name}`)
})
.delete('/:id/:name/:address', (req, res, next) => {
  const {id, name, address} = req.params;
  res.send(`PUT : /posts.test -> ${id} , ${name} , ${address}`)
})

export default router;