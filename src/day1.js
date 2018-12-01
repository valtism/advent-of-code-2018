const aocLoader = require("aoc-loader");
require("dotenv").config();

aocLoader(2018, 1).then(data => {
    console.log(data);
});

function day1(data) {
    return data;
}

module.exports = day1;
