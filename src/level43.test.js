const lengthOfTheLongestSubstrings = require("./level43");

test("", () => {
    var arr = ["abcdefg", "abcde", "abcdef", "ab", "abc"];
    expect(lengthOfTheLongestSubstrings(arr)).toBe(2);
})

test("", () => {
    var arr = ["programming", "programmer", "program"];
    expect(lengthOfTheLongestSubstrings(arr)).toBe(7);
})


test("", () => {
    var arr = ["hello", "world", "jelly"];
    expect(lengthOfTheLongestSubstrings(arr)).toBe(1);
})

test("", () => {
    var arr = ["abcd", "ab", "abcd", "ab", "abcd"];
    expect(lengthOfTheLongestSubstrings(arr)).toBe(2);
})

