const min = require("./short");

test("", () => {
  const str = "Hello anh em";
  expect(min(str)).toBe('em');
});

test("", () => {
    const str = "Hello anh em techlead a";
    expect(min(str)).toBe('a');
  });

  test("", () => {
    const str = "Hello anh em techlead b";
    expect(min(str)).toBe('b');
  });

