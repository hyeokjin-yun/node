//callback 함수가 동작하는 데 걸리는 시간
console.log('timeout check!');
console.time('timeout 0');
setTimeout(() => {
  console.timeEnd('timeout 0')
  console.log('setTimeout!');
}, 2000);

//call stack -> api -> 2초 대기 -> task queue -> call stack
//global에서 지원하는 함수 