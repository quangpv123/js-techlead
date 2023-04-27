const longestIncreasingSubsequence = require("./level49");

test("", () => {
    var arr = [1, 2, 3, 8, 6, 3];
  expect(longestIncreasingSubsequence(arr)).toBe(3);
});


test("", () => {
    var arr = [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9];
  expect(longestIncreasingSubsequence(arr)).toBe(6);
});


test("", () => {
    var arr = [-5, -4, -3, 1, 6, 9, 2];
  expect(longestIncreasingSubsequence(arr)).toBe(3);
});


test("", () => {
    var arr = [-11, -5, 0, 1, 2, 3, 4, -5];
  expect(longestIncreasingSubsequence(arr)).toBe(5);
}); 