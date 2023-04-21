var shortestString = require("./short");

test("", () => {
  var str = "Hello anh em";
  expect(shortestString(str)).toBe('em');
});

test("", () => {
    var str = "Hello anh em techlead a";
    expect(shortestString(str)).toBe('a');
  });

  test("", () => {
    var str = "Hello anh em techlead b";
    expect(shortestString(str)).toBe('b');
  });


  test("", () => {
    var str = "Xin chào tất cả mọi người";
    expect(shortestString(str)).toBe('cả');
  });

  test("", () => {
    var str = "Xin chào tất cả ha mọi người";
    expect(shortestString(str)).toBe('cả');
  });

  test("", () => {
    var str = "Bài thuat toan";
    expect(shortestString(str)).toBe('Bài');
  });



