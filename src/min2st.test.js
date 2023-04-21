const min = require("./min2st");
test ("", () => {
    arr = [1, 2, 3, 4, 5]
    expect(min(arr)).toBe(2);
})


test ("", () => {
    arr = [1, 2, 3, 4, 5, -4, -6, 100]
    expect(min(arr)).toBe(-4);
})


test ("", () => {
    arr = [1, 2, 3, 4, 5, -4, -6, -50, 100]
    expect(min(arr)).toBe(-6);
})
