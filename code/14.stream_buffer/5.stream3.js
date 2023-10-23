//readStream을 이용해 file.txt의 내용을 16바이트씩 읽어서 file-stream.txt 파일 안에 writeStream을 이용하여 저장
const fs = require('fs');
const readStream = fs.createReadStream('./file.txt',{highWaterMark:16})
const writeStream = fs.createWriteStream('./file-stream.txt')

readStream.on('data',(chunk) => {
  writeStream.write(chunk);
}).on('close', () => {
  console.log('--finished--');
})
