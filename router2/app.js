import express from 'express';
import postsRouter from './route/posts.js';
import usersRouter from './route/users.js';


const app = express();

app.use(express.json());

app.use('/posts', postsRouter)
app.use('/users', usersRouter)

app.listen(8080);