console.log('code 1');
setTimeout(() => {
  console.log('setTimeout!');
}, 0);
console.log('code 2');
setImmediate(() => {
  console.log('setImmediate!');
})
console.log('code 3');
process.nextTick(() => {
  console.log('nextTick!');
});

//code 1
//code 2
//code 3
//nextTick!
//setTimeout!
//setImmediate!

//console.log 3개는 blocking 방식으로 콜스택에 쌓이고 바로 처리
//setTimeout와 setImmediate는 non-blocking 방식으로 task queue에 쌓이고....
//nextTick은 non-blocking 함수 중 최우선 실행