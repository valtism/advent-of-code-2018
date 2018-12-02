const aocLoader = require("aoc-loader");
require("dotenv").config();

aocLoader(2018, 2).then(data => {
    console.time("Part 1");
    console.log("Part 1: " + day2part1(data));
    console.timeEnd("Part 1");
    console.time("Part 2");
    console.log("Part 2: " + day2part2(data));
    console.timeEnd("Part 2");
});

function day2part1(data) {
    const ids = data.split("\n");
    const counts = ids.map(getCounts);
    var countTrack = [0, 0];
    for (let i = 0; i < counts.length; i++) {
        const countPair = counts[i];
        countTrack[0] += countPair[0];
        countTrack[1] += countPair[1];
    }
    return countTrack.reduce((acc, curr) => acc * curr);
}

function getCounts(id) {
    var map = new Map();
    const idArray = id.split("");
    idArray.forEach(letter => {
        if (map.has(letter)) {
            var count = map.get(letter);
            map.set(letter, ++count);
        } else {
            map.set(letter, 1);
        }
    });
    const counts = Array.from(map.values());
    const countsOfTwo = counts.filter(count => count === 2).length ? 1 : 0;
    const countsOfThree = counts.filter(count => count === 3).length ? 1 : 0;
    return [countsOfTwo, countsOfThree];
}

function day2part2(data) {
    const ids = data.split("\n");
    const inputLength = ids[0].length;
    for (let i = 0; i < inputLength; i++) {
        const shortIds = ids.map(id => removeAt(id, i));
        if (new Set(shortIds).size === ids.length) {
            // All Ids are unique
            continue;
        }
        const duplicates = shortIds.filter(
            (item, index) => shortIds.indexOf(item) != index
        );
        return duplicates[0];
    }
}

function removeAt(string, i) {
    return string.slice(0, i) + string.slice(i + 1);
}

module.exports = {
    day2part1: day2part1,
    day2part2: day2part2
};
