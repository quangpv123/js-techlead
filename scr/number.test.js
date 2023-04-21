const numberOfWordInTheString = require("./number");

test ("", () => {
    var str = "Hello js";
    expect(numberOfWordInTheString(str)).toBe(2);
});

test ("", () => {
    var str = "Test đếm số từ";
    expect(numberOfWordInTheString(str)).toBe(4);
});

test ("", () => {
    var str = "Test đếm số từ lần ba";
    expect(numberOfWordInTheString(str)).toBe(6);
});