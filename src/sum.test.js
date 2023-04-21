const sumOfNumberDivisible3And5 = require("./sum");

test("", () => {
    var str = '1 3 4 15 30'
  expect(sumOfNumberDivisible3And5(str)).toBe(45);
});


test("", () => {
    var str = '1 3 4 15 30 25 40 45'
  expect(sumOfNumberDivisible3And5(str)).toBe(90);
});

test("", () => {
    var str = '1 3 4 15 30 90'
  expect(sumOfNumberDivisible3And5(str)).toBe(135);
});