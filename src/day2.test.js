const { day2part1, day2part2 } = require("./day2");

test("Part 1", () => {
    expect(
        day2part1("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab")
    ).toBe(12);
});

test("Part 2", () => {
    expect(day2part2("abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz")).toBe(
        "fgij"
    );
});
