import express from 'express';
import ejs from 'ejs';
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);


const router = express.Router();
let newsList = [];
let renderList = newsList;

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/', (req, res, next) => {
  const sql = 'select nid, url, title, content, left(rdate,10) as rdate from news';
  conn.query(sql, (err, rows, fields) => {
    if(err) console.log(err)
    else {
      ejs
      .renderFile('./template/list.ejs', {list : rows})
      .then(data => res.end(data));
    }
  });
});

router.post('/register', (req, res, next) => {
  const {title, content, url} = req.body;
  // const nid = Math.trunc(Math.random() * 1000);
  // let rdate = new Date(Date.now());
  // rdate = rdate.toLocaleDateString();
  // newsList.push({nid, url, title, content, rdate});
  const sql = 'insert into news(url, title, content, rdate) values (?, ?, ?, curdate())';
  const params = [url, title, content];
  conn.query(sql, params, (err) => {
    if(err) console.log(err)
    else res.redirect('/news');
  });
});

router.get('/:nid', (req, res, next) => {
  const nid = req.params.nid;
  // const newsContent = newsList.filter(news => news.nid === parseInt(nid));
  const sql = 'select nid, url, title, content, left(rdate,10) as rdate from news where nid = ?';
  conn.query(sql, nid, (err, rows, fields) => {
    if(err) console.log(err)
    else { 
      ejs
      .renderFile('./template/news.ejs',{newsContent : rows[0]})
      .then(data => res.end(data));
  }
  });
});

router.delete('/', (req, res, next) => {
  const {nid} = req.body;
  const sql = 'delete from news where nid = ?';
  conn.query(sql, nid, (err) => {
    if(err) console.log(err)
    else res.status(204).send('success');
  })
});

export default router;