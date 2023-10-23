const path = require('path')

//윈도우 : c:\dev\node\code\test.js
//멕, 리눅스 : /users/test/

console.log(__dirname);//global에 있는 디렉토리 , 절대경로
console.log(__filename);//global에 있는 파일 , 절대경로

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename
console.log(path.basename(__filename));//현재 실행하고 있는 파일 이름
console.log(path.basename(__dirname));//현재 실행하고 있는 파일의 디렉토리 이름?

//dirname
console.log(path.dirname(__dirname));//현재 파일의 디렉토리의 부모 절대 경로

//extname
console.log(path.extname(__filename));//현재 파일의 확장자

//parse
const parsed = path.parse(__filename)//오브젝트 형태로 출력
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);//c:\dev\node\code\11.path.js
console.log(str);

//normalize
console.log(path.normalize('./folder////////sub'));

//join
console.log(__dirname + '/' + 'image');//권장X
console.log(__dirname + path.sep + 'image');//path.sep - 윈도우, 맥에 따라 슬래쉬, 역슬래쉬 알아서 출력
console.log(path.join(__dirname , 'image'));