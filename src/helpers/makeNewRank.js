/**
 * 게임이 끝난 후 랭킹을 갱신한다.
 */

export default rank => {
    const localData = localStorage.getItem('typingPractice');
    const oldRank = JSON.parse(localData);
    rank.name = rank.name + '#' + new Date().getTime();
    // if(!oldRank.name) return; //유효성 검사 이름, 또는 포인트가 누락이거나 0점 일 경우
    oldRank.push(rank);
    const data = oldRank.sort(function(a, b) {
        return parseInt(b["point"]) - parseInt(a["point"]);
    });
    if(data.length > 10){
        data.pop();
    }
    console.log('랭킹 결과값 : ', data);
    return localStorage.setItem('typingPractice', JSON.stringify(data))
};
