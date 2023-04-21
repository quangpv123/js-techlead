const secondLargestNumber = require("./number2st");

test("", () => {
    var str = '1 2 3 8 9 0 99 88';
  expect(secondLargestNumber(str)).toBe(88);
});


test("", () => {
    var str = '1 2 3 8 9 0 99 88 -52 1.5 800';
  expect(secondLargestNumber(str)).toBe(99);
});


test("", () => {
    var str = '1 2 3 8 9 0 99 100 88 -52 1.5 800';
  expect(secondLargestNumber(str)).toBe(100);
});