const smallestPositiveInteger = require("./level35");

test("", () => {
    var nums = [1, 2, 3, 7, 8, 20];
    expect(smallestPositiveInteger(nums)).toBe(42);
});


test("", () => {
    var nums = [5, 7, 9, 11, 52, 56];
    expect(smallestPositiveInteger(nums)).toBe(1);
});


test("", () => {
    var nums = [55, 8, 11, 52, 1];
    expect(smallestPositiveInteger(nums)).toBe(2);
});


test("", () => {
    var nums = [55, 8, 11, 52, 1, 2, 3];
    expect(smallestPositiveInteger(nums)).toBe(7);
});