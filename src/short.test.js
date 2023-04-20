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


  test("", () => {
    const str = "Xin chào tất cả mọi người";
    expect(min(str)).toBe('cả');
  });

  test("", () => {
    const str = "Xin chào tất cả ha mọi người";
    expect(min(str)).toBe('cả');
  });

  test("", () => {
    const str = "Bài thuat toan";
    expect(min(str)).toBe('Bài');
  });



