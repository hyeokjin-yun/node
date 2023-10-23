import express from 'express';//package.json에서 main 밑에 "type" : "module" 설정
import route from './route.js';
import testRouter from './test.js';
import joinRouter from './join.js';


const app = express();
app.use(express.json());

app.use('/', route);
// app.put('/:id', route); use에 의해 하위 주소로 포함되므로 자동으로 바인딩된다.
// app.delete('/:id/:name/:address', route); use에 의해 하위 주소로 포함되므로 자동으로 바인딩된다.
app.use('/test', testRouter);
app.use('/join', joinRouter);

app.listen(8080);