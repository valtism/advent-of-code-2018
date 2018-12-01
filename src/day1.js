const aocLoader = require("aoc-loader");
require("dotenv").config();

aocLoader(2018, 1).then(data => {
    day1(data);
});

function day1(data) {
    const nums = data.split("\n").map(Number);
    return nums.reduce((acc, curr) => acc + curr);
}

module.exports = day1;
