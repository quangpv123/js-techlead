const longest = require("./longest");

test("", () => {
    str = "test in ra từ dài nhất"
  expect(longest(str)).toBe('test');
});


test("", () => {
    str = "test in ra từ dài nhất lần haiiiiiii"
  expect(longest(str)).toBe('haiiiiiii');
});


test("", () => {
    str = "testtttttttt in ra từ dài nhất lần baaaaa";
  expect(longest(str)).toBe('testtttttttt');
});