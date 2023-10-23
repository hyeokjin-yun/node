const fs = require('fs')//require...import와 비슷한 개념?

console.log('hello');//최상위 객체인 global은 생략 가능
global.console.log('hello')//브라우저에서는 window가 최상위 객체이고, node에서는 global이 최상위 객체
