function part1(data) {
    const coordStrings = data.split("\n");
    const coords = coordStrings.map(e => e.split(", ").map(Number));

    const lowerBound = getLowerBound(coords);
    const trimmedCoords = trimCoords(coords, lowerBound);
    const upperBound = getUpperBound(coords);

    const grid = getDistancesGrid(trimmedCoords, upperBound);
    const itemsOnPerimeter = getItemsOnPerimeter(grid, upperBound);
    const itemCounts = getItemCounts(trimmedCoords, grid);
    let largest = getLargestBoundedArea(itemCounts, itemsOnPerimeter);

    return largest;
}

function getLowerBound(coords) {
    return Array.from(
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
}

function trimCoords(coords, lowerBound) {
    return coords.map(coord => [
        coord[0] - lowerBound[0],
        coord[1] - lowerBound[1]
    ]);
}

function getUpperBound(coords) {
    return Array.from(
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
}

function getDistancesGrid(trimmedCoords, upperBound) {
    const grid = new Map();
    for (let x = 0; x <= upperBound[0]; x++) {
        for (let y = 0; y <= upperBound[1]; y++) {
            const distances = trimmedCoords.map((coord, index) => {
                return {
                    index: index,
                    coord: coord,
                    distance: manhattanDistance([x, y], coord)
                };
            });
            const shortest = distances.reduce((acc, curr) =>
                acc.distance < curr.distance ? acc : curr
            );
            const coordsInRange = distances.filter(
                distance => distance.distance === shortest.distance
            ).length;
            const coordString = "" + x + ", " + y;
            const closestIndex = coordsInRange === 1 ? shortest.index : ".";
            grid.set(coordString, closestIndex);
        }
    }
    return grid;
}

function manhattanDistance(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

function getItemsOnPerimeter(grid, upperBound) {
    const itemsOnPerimeter = new Set();
    for (let x = 0; x <= upperBound[0]; x++) {
        for (let y = 0; y <= upperBound[1]; y++) {
            const coordString = "" + x + ", " + y;
            const perimeterIndex = grid.get(coordString);
            itemsOnPerimeter.add(perimeterIndex);
            if (x !== 0 && x !== upperBound[0] && y !== upperBound[1]) {
                // Skip centre
                y = upperBound[1] - 1;
            }
        }
    }
    return itemsOnPerimeter;
}

function getItemCounts(trimmedCoords, grid) {
    const itemCounts = new Map();
    for (let i = 0; i < trimmedCoords.length; i++) {
        itemCounts.set(i, 0);
    }
    grid.forEach(value => {
        let count = itemCounts.get(value);
        itemCounts.set(value, ++count);
    });
    return itemCounts;
}

function getLargestBoundedArea(itemCounts, itemsOnPerimeter) {
    let largest = 0;
    itemCounts.forEach((value, key) => {
        if (itemsOnPerimeter.has(key) || key === ".") {
            return;
        }
        if (value > largest) {
            largest = value;
        }
    });
    return largest;
}

function part2(data) {
    return 1;
}

module.exports = {
    part1: part1,
    part2: part2
};
