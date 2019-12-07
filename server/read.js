const fs = require('fs');

const read = () =>{
    fs.readFile('text.txt', (err,data)=>{
        console.log('data : ' + data)
    });
}

exports.module = read;