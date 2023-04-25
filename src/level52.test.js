const chunk = require("./level52");

test("", () => {
    var arr = [1, 2, 3, 4, 5, 6, 7]
  expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});


test("", () => {
    var arr = [1, 'hello']
  expect(chunk(arr, 3)).toEqual([1, 'hello']);
});

test("", () => {
    var arr = ['a', 'b', 'c', 'hello', -5, 6, 5555]
  expect(chunk(arr, 3)).toEqual([['a', 'b', 'c'], ['hello', -5, 6], [5555]]);
});

test("", () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c']
  expect(chunk(arr, 5)).toEqual([[1, 2, 3, 4, 5], [6, 7, 'a', 'b', 'c']]);
});


test("", () => {
    var arr = ['hello', 'word', 'abc', -5555]
  expect(chunk(arr, 2)).toEqual([['hello', 'word'], ['abc', -5555]]);
});