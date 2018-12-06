function part1(data) {
    const coordStrings = data.split("\n");
    const coords = coordStrings.map(e => e.split(", ").map(Number));

    const lowerBound = Array.from(
        coords.reduce((acc, curr) => {
            if (curr[0] < acc[0]) {
                acc[0] = curr[0];
            }
            if (curr[1] < acc[1]) {
                acc[1] = curr[1];
            }
            return acc;
        })
    );

    const trimmedCoords = coords.map(coord => [
        coord[0] - lowerBound[0],
        coord[1] - lowerBound[1]
    ]);

    const upperBound = Array.from(
        coords.reduce((acc, curr) => {
            if (curr[0] > acc[0]) {
                acc[0] = curr[0];
            }
            if (curr[1] > acc[1]) {
                acc[1] = curr[1];
            }
            return acc;
        })
    );

    const map = new Map();

    for (i = 0; map.size < upperBound[0] * upperBound[1]; i++) {
        coords.forEach(coord => {
            // populate around coord
            const surroundingCoords = []
            
        });
    }
    var a = 1;
}

function part2(data) {
    return 1;
}

module.exports = {
    part1: part1,
    part2: part2
};
