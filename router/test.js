import express from 'express';
const router = express.Router();

//GET 요청 -> http://localhost:8080/test/?keyword=bts&name=hong
router.get('/', (req, res, next) => {
  const {keyword, name} = req.query;
  res.send(`GET : /test -> ${keyword} , ${name}`)
})

export default router;