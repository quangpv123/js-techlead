const SecondSmallestNumber = require("./min2st");
test ("", () => {
    var arr = [1, 2, 3, 4, 5]
    expect(SecondSmallestNumber(arr)).toBe(2);
})


test ("", () => {
    var arr = [1, 2, 3, 4, 5, -4, -6, 100]
    expect(SecondSmallestNumber(arr)).toBe(-4);
})


test ("", () => {
    var arr = [1, 2, 3, 4, 5, -4, -6, -50, 100]
    expect(SecondSmallestNumber(arr)).toBe(-6);
})

test ("", () => {
    var arr = [1, 2, 3, 4, 5, -4, -6, -50, 100, -100, 99]
    expect(SecondSmallestNumber(arr)).toBe(-50);
})


test ("", () => {
    var arr = [1, 2, 3, 4, 5, -4, -6, 100, -100, 99, -49.5, 9999]
    expect(SecondSmallestNumber(arr)).toBe(-49.5);
})

