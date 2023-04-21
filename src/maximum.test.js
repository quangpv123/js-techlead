const maximum = require("./maximum");

test("", () => {
    var arr = [-2, -3, 4, -1, -2, 1, 5, -3]
  expect(maximum(arr)).toBe(7);
});


test("", () => {
    var arr = [-2, -3, 4, -1, -2, 1, 5, -3, 10]
  expect(maximum(arr)).toBe(14);
});

test("", () => {
    var arr = [-2, -3, 4, -1, -2, 1, 5, -3, 10, -5]
  expect(maximum(arr)).toBe(14);
});


test("", () => {
    var arr = [-2, -3, 4, -1, -2, 1, 5, -3, 10, -5, 20]
  expect(maximum(arr)).toBe(29);
});