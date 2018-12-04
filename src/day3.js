function part1(data) {
    const claims = data.split("\n").map(parseClaim);

    const fabric = new Map();
    claims.forEach(claim => {
        populateFabric(fabric, claim);
    });

    return getNumberOverlapped(fabric);
}

function populateFabric(fabric, claim) {
    for (let x = claim.xStart; x < claim.xEnd; x++) {
        for (let y = claim.yStart; y < claim.yEnd; y++) {
            let coords = x + "," + y;
            if (fabric.has(coords)) {
                let count = fabric.get(coords);
                fabric.set(coords, ++count);
            } else {
                fabric.set(coords, 1);
            }
        }
    }
}

function getNumberOverlapped(fabric) {
    const gridCounts = Array.from(fabric.values());
    const overlaps = gridCounts.filter(count => count > 1);
    return overlaps.length;
}

function parseClaim(claim) {
    props = claim.match(/\d{1,}/g).map(Number);
    return {
        Id: props[0],
        xStart: props[1],
        xEnd: props[1] + props[3],
        yStart: props[2],
        yEnd: props[2] + props[4]
    };
}

function part2(data) {
    const claims = data.split("\n").map(parseClaim);

    const fabric = new Map();
    claims.forEach(claim => {
        populateFabric(fabric, claim);
    });

    const nonOverlapClaim = claims.find(claim => testClaim(fabric, claim));
    return nonOverlapClaim.Id;
}

function testClaim(fabric, claim) {
    // Check if claim does not over any overlapping area
    for (let x = claim.xStart; x < claim.xEnd; x++) {
        for (let y = claim.yStart; y < claim.yEnd; y++) {
            let coords = x + "," + y;
            if (fabric.get(coords) > 1) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    part1: part1,
    part2: part2
};
