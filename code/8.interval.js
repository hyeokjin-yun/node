//1초에 정수를 1씩 증가하여 출력하는 함수
let n = 1;
const interval = setInterval(() => {
  console.log(n++);
}, 1000);

setTimeout(() => {
  clearInterval(interval)
}, 6000);