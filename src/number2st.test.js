const number = require("./number2st");

test("", () => {
    str = '1 2 3 8 9 0 99 88';
  expect(number(str)).toBe(88);
});


test("", () => {
    str = '1 2 3 8 9 0 99 88 -52 1.5 800';
  expect(number(str)).toBe(99);
});


test("", () => {
    str = '1 2 3 8 9 0 99 100 88 -52 1.5 800';
  expect(number(str)).toBe(100);
});