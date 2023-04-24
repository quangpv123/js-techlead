const numberOfSubsequencesThatSumToTheTargerValue = require("./level42");

test ("", () => {
    var arr = [1, 2, 3, 4, 5];
    expect(numberOfSubsequencesThatSumToTheTargerValue(arr, 5)).toBe(3);
});


test ("", () => {
    var arr = [1, 1, 2, 3, 4];
    expect(numberOfSubsequencesThatSumToTheTargerValue(arr, 5)).toBe(4);
});


test ("", () => {
    var arr = [1, 1, 2, 3, 4, 5];
    expect(numberOfSubsequencesThatSumToTheTargerValue(arr, 5)).toBe(5);
});


test ("", () => {
    var arr = [1, 1, 2, 3, 4, 5, 6, 7];
    expect(numberOfSubsequencesThatSumToTheTargerValue(arr, 9)).toBe(2);
});


test ("", () => {
    var arr = [1, 1, 2, 3, 4, 5, 6, 7, 10];
    expect(numberOfSubsequencesThatSumToTheTargerValue(arr,)).toBe(2);
});


