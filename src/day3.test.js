const day3 = require("./day3");

test("Part 1", () => {
    expect(day3.part1("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2")).toBe(4);
});

test("Part 2", () => {
    expect(day3.part2()).toBe(1);
});
