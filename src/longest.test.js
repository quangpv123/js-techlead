const longestWordInTheList = require("./longest");

test("", () => {
    var str = "test in ra từ dài nhất"
  expect(longestWordInTheList(str)).toBe('test');
});


test("", () => {
    var str = "test in ra từ dài nhất lần haiiiiiii"
  expect(longestWordInTheList(str)).toBe('haiiiiiii');
});


test("", () => {
    var str = "testtttttttt in ra từ dài nhất lần baaaaa";
  expect(longestWordInTheList(str)).toBe('testtttttttt');
});