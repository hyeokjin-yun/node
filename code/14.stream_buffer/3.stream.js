const fs = require('fs');

//파일을 읽어오는 방법 -> Stream
const readStream = fs.createReadStream('./file.txt',{highWaterMark:64})//data량 default값은 64
const buf = [];
readStream.on('data',(chunk) => {//non-blocking IO // 첫번째 인자 'data'는 data 말고도 약속된 데이터가 많다  createReadStream fs.d.ts 참고
  buf.push(chunk);
  console.count('data');//반복횟수?
  //console.log(chunk.toString());
  //readStream.close();//그냥 끝내려면 이렇게 close
})

// .on('close',()=>{//close 안하면 GC의 대상이 되지 않음 | 체이닝 가능 | 끝낼 때 구현할 기능 있으면 이렇게 close
//   console.log(buf.length);
//   console.log(buf.join(' '));
//   console.log('--finished--');
// })