function part1(data) {
    const nums = data.split("\n").map(Number);
    return nums.reduce((acc, curr) => acc + curr);
}

function part2(data) {
    const nums = data.split("\n").map(Number);
    const frequencies = new Set([0]);
    var sum = 0;
    while (true) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            sum += num;
            if (frequencies.has(sum)) {
                return sum;
            }
            frequencies.add(sum);
        }
    }
}

module.exports = {
    part1: part1,
    part2: part2
};
