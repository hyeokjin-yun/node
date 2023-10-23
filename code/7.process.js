const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);//프로세스 아이디
console.log(process.ppid);//프로세스 부모의 아이디 
console.log(process.platform);
console.log(process.env);//모든 환경변수
console.log(process.uptime());
console.log(process.cwd());//현재 경로 출력
console.log(process.cpuUsage());

//process : cpu가 실행하는 하나의 프로그램을 할당하는 공간

//setTimeout(콜백함수, 3000) -> non-blocking
setTimeout(() => {
  console.log('setTimeout!');
}, 1000);

//nextTick(콜백함수); -> non-blocking | nextTick함수는 비동기식 함수 중 처리 우선순위가 가장 높다.
process.nextTick(() => {
  console.log('nextTick!');
})