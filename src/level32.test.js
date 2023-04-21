const NumberElementOfLongestIncresingSubsequence = require("./level32");

test ("", () => {
    var arr = [3, 10, 2, 1, 20];
    expect(NumberElementOfLongestIncresingSubsequence(arr)).toBe(3);
})

test ("", () => {
    var arr = [50, 3, 10, 7, 40, 80 ];
    expect(NumberElementOfLongestIncresingSubsequence(arr)).toBe(4);
})

test ("", () => {
    var arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
    expect(NumberElementOfLongestIncresingSubsequence(arr)).toBe(6);
})

test ("", () => {
    var arr = [-5, 10, 22, 9, 33, 21, 50, 41, 60, 80, -55];
    expect(NumberElementOfLongestIncresingSubsequence(arr)).toBe(7);
})

test ("", () => {
    var arr = [10,9,2,5,3,7,101,18];
    expect(NumberElementOfLongestIncresingSubsequence(arr)).toBe(4);
})
