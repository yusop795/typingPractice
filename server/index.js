const fs = require("fs");

function rank(name, point) {
  //이름과 점수를 넘겨받는다.
  //rank.json에 있는 데이터와 넘겨받은 데이터를 비교하여 상위 10개를 다시 재저장(덮어쓰기)한다.
  fs.readFile("rank.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data.push({ name, point });

    data = data.sort(function(a, b) {
      return parseInt(b["point"]) - parseInt(a["point"]);
    });

    const result = data.slice(0, 10);
    fs.writeFile("rank.json", JSON.stringify(result), "utf8", function(err) {
      return result;
    });
  });
}

module.exports = rank;
