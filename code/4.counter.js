let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.increase = increase;
//module.exports.호출할 이름? = 함수 이름;
module.exports.getCount = getCount;

//노드 방식 export import
//노드 방식 export import
//노드 방식 export import