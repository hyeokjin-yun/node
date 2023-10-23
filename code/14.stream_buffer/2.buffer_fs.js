const fs = require('fs');
const process = require('process');

//파일 읽기 전, 후 -> 메모리 사용량 체크
console.log(process.memoryUsage().rss);

fs.readFile('./file.txt', (err,data) => {//자바스크립트 엔진이 내부적으로 buffer를 만들어 data를 대입
  //읽은 데이터를 file2.txt. 파일에 저장
  fs.writeFile('./file2.txt',data, () => {
    console.log(process.memoryUsage().rss);
  })
})

//파일 읽기 전, 후 -> 메모리 사용량 체크 -> 프로미스 방식
console.log(process.memoryUsage().rss);

fs.promises.readFile('./file.txt')
.then(data => {
  fs.promises.writeFile('./file3.txt', data)
    .then(console.log(process.memoryUsage().rss))
    .catch(console.error)
})
.catch(console.error)