const fs = require('fs');

const write = (data) => {
        fs.writeFile('text.txt', 'data', 'utf8', function(err) {
            //파일을 저장한다.
            console.log('비동기적 파일 쓰기 완료');
        });
}

exports.module = write;