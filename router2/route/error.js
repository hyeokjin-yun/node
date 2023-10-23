import express from 'express';

const router = express.Router();

router.use((error,req,res,next) => {
  console.log(error);
  res.status(404).send('File Not Found')
});