const day8 = require("./day8");

test("Part 1", () => {
    expect(day8.part1("2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2")).toBe(138);
});

test("Part 2", () => {
    expect(day8.part2("2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2")).toBe(66);
});
