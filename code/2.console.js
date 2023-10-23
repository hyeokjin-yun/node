console.log('logging...');

//log level
console.log('log');     //개발
console.info('info');   //정보 ,사용법
console.warn('warn');   //경고
console.error('error'); //에러

console.clear(); //로그삭제

//assert

console.assert(2 === 2,'동일함'); //조건식이 true이면 출력X
console.assert(2 === 3,'동일하지 않음'); //false인 경우만 출력O

//print object
const student = {name:'홍길동',age:20,color:{default:'red'}}
console.log(student);
console.table(student);
console.dir(student, {showHidden:true, color:false, depth:0});

//time
console.time('for loop');
for(let i=0; i<10;i++){
  i++;
}
console.timeEnd('for loop');

//trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('function 3!');
  console.trace();
}

f1()


//ctrl 마우스 왼쪽 -> 설명