const { day1part2 } = require("./day1");

test("+1, -1 first reaches 0 twice.", () => {
    expect(day1part2("+1\n-1")).toBe(0);
});

test("+3, +3, +4, -2, -4 first reaches 10 twice.", () => {
    expect(day1part2("+3\n+3\n+4\n-2\n-4")).toBe(10);
});

test("-6, +3, +8, +5, -6 first reaches 5 twice.", () => {
    expect(day1part2("-6\n+3\n+8\n+5\n-6")).toBe(5);
});

test("+7, +7, -2, -7, -4 first reaches 14 twice.", () => {
    expect(day1part2("+7\n+7\n-2\n-7\n-4")).toBe(14);
});
