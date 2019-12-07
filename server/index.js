const fs = require("fs");

function rank(name, point) {
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