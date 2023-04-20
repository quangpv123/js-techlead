const max = require("./big");

test("", () => {
    const arr = [1, 2, 3]
    expect(max(arr)).toBe(3);
});

test("", () => {
    const arr = [1, 2, 3, 4, 81, 1.2]
    expect(max(arr)).toBe(81);
});

test("", () => {
    const arr = [1, 2, 3, 4.1, -2]
    expect(max(arr)).toBe(4.1);
});