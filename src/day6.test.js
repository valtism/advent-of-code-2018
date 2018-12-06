const day6 = require("./day6");

test("Part 1", () => {
    expect(day6.part1("1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9")).toBe(17);
});

test("Part 2", () => {
    expect(day6.part2("1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9", 32)).toBe(16);
});
