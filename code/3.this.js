function hello(num) {
  this.num = num;//글로벌 변수로 선언이 되는 것????
  console.log(num);
  //console.log(this);//함수에서 선언된 this는 함수가 포함된 글로벌 객체를 의미, 호출한 함수의 부모 객체
}

//console.log(num) 에러 발생
hello(100);//이 함수를 호출한 이후로 num은 전역 변수가 되어
console.log(num);//로그를 찍으면 100이 출력된다.

class Test{
  constructor(name){
    this.name = name;
    console.log(this);//여기서 this는 객체 자신 Test를 의미함
  }
}

const t = new Test('hong');