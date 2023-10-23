import express from 'express';
import bestSellerRouter from './router/bestSeller.js'

const app = express();

app.use(express.static("static"));
app.use('/BestSeller', bestSellerRouter);


app.listen(8080);