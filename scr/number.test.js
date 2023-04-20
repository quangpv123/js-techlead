const number = require("./number");

test ("", () => {
    var str = "Hello js";
    expect(number(str)).toBe(2);
});

test ("", () => {
    var str = "Test đếm số từ";
    expect(number(str)).toBe(4);
});

test ("", () => {
    var str = "Test đếm số từ lần ba";
    expect(number(str)).toBe(6);
});