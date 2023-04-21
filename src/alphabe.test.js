const alphabeOder = require("./alphabe");

test("", () => {
    var list = 'bố mẹ anh chị';
  expect(alphabeOder(list)).toBe("anh bố chị mẹ");
});

test("", () => {
    var list = 'bố mẹ anh chị em';
  expect(alphabeOder(list)).toBe("anh bố chị em mẹ");
});

test("", () => {
    var list = 'bố mẹ anh chị em ông bà bố mẹ';
  expect(alphabeOder(list)).toBe("anh bà bố bố chị em mẹ mẹ ông");
});


test("", () => {
    var list = 'a d b c f e';
  expect(alphabeOder(list)).toBe("a b c d e f");
});