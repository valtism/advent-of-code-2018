const aocLoader = require("aoc-loader");
require("dotenv").config();

aocLoader(2018, 1).then(data => {
    console.log(day1part1(data));
    console.log(day1part2(data));
});

function day1part1(data) {
    const nums = data.split("\n").map(Number);
    return nums.reduce((acc, curr) => acc + curr);
}

function day1part2(data) {
    const nums = data.split("\n").map(Number);
    const frequencies = [0];
    var sum = 0;
    while (1) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            sum += num;
            if (frequencies.includes(sum)) {
                return sum;
            }
            frequencies.push(sum);
        }
    }
}

module.exports = {
    day1part1: day1part1,
    day1part2: day1part2,
}
