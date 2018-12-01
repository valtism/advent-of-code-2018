const aocLoader = require("aoc-loader");
require("dotenv").config();

aocLoader(2018, 1).then(data => {
    console.time("Part 1");
    console.log("Part 1: " + day1part1(data));
    console.timeEnd("Part 1");
    console.time("Part 2");
    console.log("Part 2: " + day1part2(data));
    console.timeEnd("Part 2");
});

function day1part1(data) {
    const nums = data.split("\n").map(Number);
    return nums.reduce((acc, curr) => acc + curr);
}

function day1part2(data) {
    const nums = data.split("\n").map(Number);
    const frequencies = new Set([0]);
    var sum = 0;
    while (true) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            sum += num;
            if (frequencies.has(sum)) {
                return sum;
            }
            frequencies.add(sum);
        }
    }
}

module.exports = {
    day1part1: day1part1,
    day1part2: day1part2
};
