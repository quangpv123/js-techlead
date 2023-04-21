const longestIncreasingSubsequence = require("./longest")

test ("", () => {
    arr = [10, 8, 4, 19, 20, 30];
    expect(longestIncreasingSubsequence(arr)).toBe(4);
});


test ("", () => {
    arr = [10, 8, 4, 19, 20, 30, 3, 1];
    expect(longestIncreasingSubsequence(arr)).toBe(4);
});

test ("", () => {
    arr = [10, 8, 4, 19, 20, 30, 3, 33, 44];
    expect(longestIncreasingSubsequence(arr)).toBe(6);
});


test ("", () => {
    arr = [10, 8, 4, 19, 20, 30, 3, 33, 44, 1, 55];
    expect(longestIncreasingSubsequence(arr)).toBe(7);
});

test ("", () => {
    arr = [-5, 10, 8, 4, 19, 20, 30, -6, -5];
    expect(longestIncreasingSubsequence(arr)).toBe(5);
});

