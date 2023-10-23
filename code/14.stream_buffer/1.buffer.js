const fs = require('fs');
const buf = Buffer.from('Hi~');//stactic method
console.log(buf);//<Buffer 48 69 7e>
console.log(buf.length);//문자열hi~의 길이 3
console.log(buf[0]);//H의 아스키 10진수 코드 72
console.log(buf[1]);//i의 아스키 10진수 코드 105
console.log(buf[2]);//~의 아스키 10진수 코드 126
console.log(buf.toString('utf-8'));//문자열 출력 | utf-8 생략 가능

const buf2 = Buffer.alloc(buf.length);//stactic method
console.log(buf2.length);
console.log(buf2);//<Buffer 00 00 00>
buf.copy(buf2);//buf의 내용 복사, buf2에 넣음
console.log(buf2);//<Buffer 48 69 7e>

const newBuf = Buffer.concat([buf,buf2]);//buf,buf2의 내용을 합쳐 newBuf에 넣음 | stactic method
console.log(newBuf);//<Buffer 48 69 7e 48 69 7e>
console.log(newBuf.toString());//Hi~Hi~
