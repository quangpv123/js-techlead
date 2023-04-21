const sum = require("./sum");

test("", () => {
    str = '1 3 4 15 30'
  expect(sum(str)).toBe(45);
});


test("", () => {
    str = '1 3 4 15 30 25 40 45'
  expect(sum(str)).toBe(90);
});

test("", () => {
    str = '1 3 4 15 30 90'
  expect(sum(str)).toBe(135);
});