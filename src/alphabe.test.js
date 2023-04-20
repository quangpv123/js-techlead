const alphabe = require("./alphabe");

test("", () => {
    list = 'bố mẹ anh chị';
  expect(alphabe(list)).toBe("anh bố chị mẹ");
});

test("", () => {
    list = 'bố mẹ anh chị em';
  expect(alphabe(list)).toBe("anh bố chị em mẹ");
});

test("", () => {
    list = 'bố mẹ anh chị em ông bà bố mẹ';
  expect(alphabe(list)).toBe("anh bà bố bố chị em mẹ mẹ ông");
});


test("", () => {
    list = 'a d b c f e';
  expect(alphabe(list)).toBe("a b c d e f");
});