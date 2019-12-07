function write () {
    // writeFile('text.txt', 'data', 'utf8', function(err) {
    //     //파일을 저장한다.
    //     console.log('비동기적 파일 쓰기 완료');
    // });
    return new File(['data'],'text.txt',{type:'text/plan'});
}

// function read (){
//     fs.readFile('text.txt', (err,data)=>{
//         console.log('data : ' + data)
//     });
// }
