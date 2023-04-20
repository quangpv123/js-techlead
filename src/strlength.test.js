const strlength = require("./strlength");

test("", () => {
    expect(strlength('hello')).toBe(5);
  });

  test("", () => {
    expect(strlength('hello 123')).toBe(9);
  });

  test("", () => {
    expect(strlength('hello 123 456')).toBe(13);
  });
  