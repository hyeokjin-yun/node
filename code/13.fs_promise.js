const fs = require('fs').promises;
const os = require('os');

//test.txt 파일을 읽어 콘솔에 출력


fs.readFile('./test.txt','UTF8')//buffer : 임시 저장 공간
.then((data) => console.log(data))
.catch(console.err)

//test.txt 파일에 문자열 덮어쓰기
fs.writeFile('./test.txt','marigold lady inferno',)//영어를 쓸 것이므로 인코딩 option 넣지 않는다.
.then(console.log('--write complete--'))
.catch(console.err)
//writeFile이 readFile보다 먼저 비동기로 먼저 처리되어 실행된다.

//test.txt 파일에 데이터 추가하기
fs.appendFile('./test.txt','good to see you' + os.EOL)
.then(console.log('--append complete--'))
.catch(console.err)

//test.txt 파일을 복사하기
fs.copyFile('./test.txt','./test-copy.txt')
.then()//리턴하는 값이 없으므로 생략
.catch(console.error)

//'sub-folder' 생성
fs.mkdir('sub-folder')
.then(console.log)
.catch(console.error)