const day7 = require("./day7");

test("Part 1", () => {
    expect(
        day7.part1(
            "Step C must be finished before step A can begin.\nStep C must be finished before step F can begin.\nStep A must be finished before step B can begin.\nStep A must be finished before step D can begin.\nStep B must be finished before step E can begin.\nStep D must be finished before step E can begin.\nStep F must be finished before step E can begin.F"
        )
    ).toBe("CABDFE");
});

test("Part 2", () => {
    expect(
        day7.part2(
            "Step C must be finished before step A can begin.\nStep C must be finished before step F can begin.\nStep A must be finished before step B can begin.\nStep A must be finished before step D can begin.\nStep B must be finished before step E can begin.\nStep D must be finished before step E can begin.\nStep F must be finished before step E can begin.F",
            2,
            0
        )
    ).toBe(15);
});
