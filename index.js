const aocLoader = require("aoc-loader");
require("dotenv").config();

const day1 = require("./src/day1");
const day2 = require("./src/day2");

aocLoader(2018, 2).then(data => {
    console.time("Part 1");
    console.log("Part 1: " + part1(data));
    console.timeEnd("Part 1");
    console.time("Part 2");
    console.log("Part 2: " + part2(data));
    console.timeEnd("Part 2");
});
