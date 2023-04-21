const lengthString = require("./strlength");

test("", () => {
    expect(lengthString('hello')).toBe(5);
  });

  test("", () => {
    expect(lengthString('hello 123')).toBe(9);
  });

  test("", () => {
    expect(lengthString('hello 123 456')).toBe(13);
  });
  