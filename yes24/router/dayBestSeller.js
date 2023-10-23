import express from 'express';
import ejs from 'ejs';
import * as list from './data.js'

const router = express.Router();

router.get('/', (req, res, next) => {
  ejs
  .renderFile('./template/list.ejs', {})
  .then(data => res.end(data));
});

router.get('/:page', (req, res, next) => {
  res.json(list.dayBestSellerList);
});

export default router;