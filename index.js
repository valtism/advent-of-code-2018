const aocLoader = require("aoc-loader");
require("dotenv").config();

const day1 = require("./src/day1");
const day2 = require("./src/day2");
const day3 = require("./src/day3");
const day4 = require("./src/day4");

aocLoader(2018, 4).then(data => {
    console.time("Part 1");
    console.log("Part 1: " + day4.part1(data));
    console.timeEnd("Part 1");
    console.time("Part 2");
    console.log("Part 2: " + day4.part2(data));
    console.timeEnd("Part 2");
});
