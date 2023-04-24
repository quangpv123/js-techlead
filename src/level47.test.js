const sortTheStringFromLongToShort = require("./level47");

test("", () => {
  var arr = ['the quick brown fox', 'the lazy dog jumps over the fence', 'the cat in the hat'];
  expect(sortTheStringFromLongToShort(arr)).toBe('the lazy dog jumps over the fence, the quick brown fox, the cat in the hat');
});


test("", () => {
    var arr = ["hello", "world", "jelly"];
    expect(sortTheStringFromLongToShort(arr)).toBe('hello, jelly, world');
  });

  
test("", () => {
    var arr = ["hello1", "world22", "jelly"];
    expect(sortTheStringFromLongToShort(arr)).toBe('world22, hello1, jelly');
  });

  
test("", () => {
    var arr = ["hello1", "world", "jelly"];
    expect(sortTheStringFromLongToShort(arr)).toBe('hello1, jelly, world');
  });

  
test("", () => {
    var arr = ["hello", "world2", "jelly"];
    expect(sortTheStringFromLongToShort(arr)).toBe('world2, hello, jelly');
  });