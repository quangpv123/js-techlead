const maximumProductOfAnyThreeDistinctElements = require("./level46");

test ("", () => {
    var arr = [-10, -5, 0, 1, 2, 3, 4];
    expect(maximumProductOfAnyThreeDistinctElements(arr)).toBe(200);
});


test ("", () => {
    var arr = [5, 4, 1, 3, 6, 2];
    expect(maximumProductOfAnyThreeDistinctElements(arr)).toBe(120);
});


test ("", () => {
    var arr = [-5, -6, -7, 8, 1, 2, 3];
    expect(maximumProductOfAnyThreeDistinctElements(arr)).toBe(336);
});

test ("", () => {
    var arr = [3, 1, 4, 2, 6, 5, 9, 10, -10];
    expect(maximumProductOfAnyThreeDistinctElements(arr)).toBe(540);
});

test ("", () => {
    var arr = [-1, -5, -6, -2, -7, -3, -4];
    expect(maximumProductOfAnyThreeDistinctElements(arr)).toBe(-6);
});