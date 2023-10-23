const counter = require(`./4.counter.js`);//require : export한 함수를 불러올 때, 빌트인 객체를 불러올 때 사용

counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());

//node API에서 대문자는 대부분 클래스, 소문자는 빌트인 객체로 제공이 된다.
