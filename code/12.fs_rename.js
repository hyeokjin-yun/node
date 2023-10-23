const fs = require('fs');

//fs에서는 3가지 방식으로 제공

// synchoronous : renameSync(old,new) //blocking 방식이므로 시간이 오래 걸릴 경우 다음 함수가 기다리는 시간 길어짐
try {
  fs.renameSync('./test.txt','./test-new.txt');
  console.log('--rename success--');
} catch (error) {
  console.log('--error--');
  console.log(error);
}
console.log('---test!---');

// callback : rename(old,new,callback)
fs.rename('test.txt','test-new.txt',(err) => {//성공 시 err는 주소값이 없는 객체이므로 log를 찍으면 null 출력
  console.log(err); 
})

//promise : rename(old,new)
fs.promises.rename('test.txt','test-new.txt')
.then(()=> console.log('성공'))
.catch(console.err)
.finally(() => {console.log('--terminate--');})