const ascendingOder = require("./asc");

test("", () => {
  var str = '1 4 3 2';
  expect(ascendingOder(str)).toBe('1 2 3 4');
});

test("", () => {
    var str = '1 4 3 2 52 63 15';
    expect(ascendingOder(str)).toBe('1 2 3 4 15 52 63');
  });

  test("", () => {
    var str = '52 54 1 15 4 3 2';
    expect(ascendingOder(str)).toBe('1 2 3 4 15 52 54');
  });

  test("", () => {
    var str = '-5 -1 4 3 5.5 -3.2 2';
    expect(ascendingOder(str)).toBe('-5 -3.2 -1 2 3 4 5.5');
  });
  
  
  