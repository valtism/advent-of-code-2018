function part1(data) {
    const ids = data.split("\n");
    const counts = ids.map(getCountPair);
    var countTrack = [0, 0];
    for (let i = 0; i < counts.length; i++) {
        const countPair = counts[i];
        countTrack[0] += countPair[0];
        countTrack[1] += countPair[1];
    }
    return countTrack.reduce((acc, curr) => acc * curr);
}

function getCountPair(id) {
    const counts = getCountArray(id);
    const hasCountsOfTwo = counts.filter(count => count === 2).length ? 1 : 0;
    const hasCountsOfThree = counts.filter(count => count === 3).length ? 1 : 0;
    return [hasCountsOfTwo, hasCountsOfThree];
}

function getCountArray(id) {
    const map = new Map();
    const chars = id.split("");
    chars.forEach(char => {
        if (map.has(char)) {
            var count = map.get(char);
            map.set(char, ++count);
        } else {
            map.set(char, 1);
        }
    });
    return Array.from(map.values());
}

function part2(data) {
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
        // Should only have one duplicate here we're looking for
        return duplicates[0];
    }
}

function removeAt(string, i) {
    return string.slice(0, i) + string.slice(i + 1);
}

module.exports = {
    part1: part1,
    part2: part2
};
