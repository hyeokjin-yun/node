import express from "express";
import ejs from "ejs";
import dbConfig from '../db/database.js';

const conn = dbConfig.init();
dbConfig.connect(conn);

const router = express.Router();


router.use(express.json());
router.use(express.urlencoded());

// 1. GET: /dwitter - All Dwitter List
router.get('/',(req, res, next) => {
  const sql = 'select id, name, left(date,10) date, content from dwitter';
  conn.query(sql, (err, rows, fields) => {
    if(err) {
      console.log(err);
    }else {
      ejs
      .renderFile('./template/index.ejs', {list : rows}) //rows 데이터는 배열
      .then((data) => res.end(data));
    }
  });
});

// 2. POST: /dwitter - tweet create
router.post('/', (req, res, next) => {
  const {id, name, content} = req.body;
  const sql = 'insert into dwitter(id, name, date, content) values(?,?,curdate(),?)'; // ? : prepare statement
  const params = [id, name, content];
  conn.query(sql, params, (err) => {
    if(err) console.log('query is not executed');
    else res.redirect('/dwitter');
  });
});

// 3. GET: /dwitter?id=자신의 아이디 - My Dwitter list
//    GET: /dwitter/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const sql = 'select id, name, left(date,10) date, content from dwitter where id = ?';
  conn.query(sql,id, (err, rows, fields) => {
    if(err) console.log(err);
    else {
      ejs
      .renderFile('./template/index.ejs',{list : rows})
      .then((data) => res.end(data));//여기서 data는 index.ejs에 renderList 넣어 만든 파일
    }
  });
});

// 4. PUT: /dwitter/:id - My Dwitter update
router.put('/', (req, res, next) => {
  const {id, content} = req.body;
  const params = [content, id];
  const sql = 'update dwitter set content = ? where id = ?';
  conn.query(sql, params, (err) => { // insert, update, delect -> err
    if(err) console.log('update error' + err)
    else res.status(204).send('update success');//이 결과값은 호출한 index.js의 fetch가 받는다
  });
});

// 5. DELETE: /dwitter/:id - My Dwitter delete
router.delete('/', (req, res, next) => {
  const {id} = req.body;
  const sql = 'delete from dwitter where id = ?';
  conn.query(sql,id, (err) => {
    if(err) console.log('delete error' + err)
    else res.status(204).send('delete success')
  });
});
export default router;