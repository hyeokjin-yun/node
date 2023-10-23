import express from 'express';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended : true}));

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  const sql = 'select rid, content, nid, redate from news_reply where nid = ?';
  conn.query(sql,nid, (err, rows, fields) => {
    if(err) console.log(err)
    else res.json(rows);
  });
});

router.post('/', (req, res, next) => {
  const {nid, content} = req.body;
  const sql = 'insert into news_reply(content, nid, redate) values(?, ?, sysdate())';
  const params = [content, nid];
  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.status(201).send('create success');
  })
});


export default router;