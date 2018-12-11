function part1(data) {
    function sumMetadata() {
        const children = iterator.next();
        const metadata = iterator.next();
        for (let i = 0; i < children.value; i++) {
            sumMetadata();
        }
        for (let j = 0; j < metadata.value; j++) {
            sum += iterator.next().value;
        }
    }

    const iterator = data
        .split(" ")
        .map(Number)
        .values();
    let sum = 0;

    sumMetadata(iterator);

    return sum;
}

function part2(data) {
    const iterator = data
        .split(" ")
        .map(Number)
        .values();
    return getValue(iterator);
}

function getValue(iterator) {
    const childrenNum = iterator.next();
    const metadataNum = iterator.next();

    const children = [];
    for (let i = 0; i < childrenNum.value; i++) {
        children.push(getValue(iterator));
    }
    const metadata = [];
    for (let j = 0; j < metadataNum.value; j++) {
        metadata.push(iterator.next().value);
    }

    if (childrenNum.value === 0) {
        return metadata.reduce((acc, curr) => acc + curr);
    } else {
        return metadata.reduce(
            (acc, curr) => (acc += children[curr - 1] ? children[curr - 1] : 0),
            0
        );
    }
}

module.exports = {
    part1: part1,
    part2: part2
};
