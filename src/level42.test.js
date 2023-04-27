const numberOfSubsequencesThatSumToTheTargerValue = require("./level42");

test ("", () => {
    var nums = [1, 2, 3, 4, 5];
    expect(numberOfSubsequencesThatSumToTheTargerValue(nums, 5)).toBe(3);
});


test ("", () => {
    var nums = [1, 1, 2, 3, 4];
    expect(numberOfSubsequencesThatSumToTheTargerValue(nums, 5)).toBe(4);
});


test ("", () => {
    var nums = [1, 1, 2, 3, 4, 5];
    expect(numberOfSubsequencesThatSumToTheTargerValue(nums, 5)).toBe(5);
});


test ("", () => {
    var nums = [1, 1, 2, 3, 4, 5, 6, 7];
    expect(numberOfSubsequencesThatSumToTheTargerValue(nums, 4)).toBe(2);
});


test ("", () => {
    var nums = [1, 1, 2, 3, 4, 5, 6, 7, 10];
    expect(numberOfSubsequencesThatSumToTheTargerValue(nums, 3)).toBe(2);
});


