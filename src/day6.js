function part1(data) {
    const coordStrings = data.split("\n");
    const coords = coordStrings.map(e => e.split(", ").map(Number));

    const upperBound = getUpperBound(coords);
    const grid = getDistancesGrid(coords, upperBound);

    const itemsOnPerimeter = getItemsOnPerimeter(grid, upperBound);
    const itemCounts = getItemCounts(coords, grid);
    let largest = getLargestBoundedArea(itemCounts, itemsOnPerimeter);

    return largest;
}

function getUpperBound(coords) {
    const upperBound = [0, 0];
    coords.forEach(coord => {
        if (coord[0] > upperBound[0]) {
            upperBound[0] = coord[0];
        }
        if (coord[1] > upperBound[1]) {
            upperBound[1] = coord[1];
        }
    });
    return upperBound;
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

function part2(data, MAX_DISTANCE) {
    if (!MAX_DISTANCE) {
        MAX_DISTANCE = 10000
    }
    const coordStrings = data.split("\n");
    const coords = coordStrings.map(e => e.split(", ").map(Number));

    const upperBound = getUpperBound(coords);
    const grid = getDistanceToAllGrid(upperBound, coords);

    const gridArray = Array.from(grid);
    const closeCoords = gridArray.filter(coord => coord[1] < MAX_DISTANCE);
    return closeCoords.length;
}

function getDistanceToAllGrid(upperBound, trimmedCoords) {
    const grid = new Map();
    for (let x = 0; x <= upperBound[0]; x++) {
        for (let y = 0; y <= upperBound[1]; y++) {
            const distanceToAll = trimmedCoords
                .map(coord => manhattanDistance([x, y], coord))
                .reduce((arr, curr) => arr + curr);
            const coordString = "" + x + ", " + y;
            grid.set(coordString, distanceToAll);
        }
    }
    return grid;
}

module.exports = {
    part1: part1,
    part2: part2
};
