const twoStringLargestOverlapOfCharacters = require("./level34");

test("", () => {
    var arr = ["abcdefg", "cdefghijklm", "ghijklmnopqr"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("cdefghijklm, ghijklmnopqr");
});


test("", () => {
    var arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("foobar, barfoo");
});


test("", () => {
    var arr = ["xinchao", "world", "foobar", "chaoxin", "he", "llo"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("xinchao, chaoxin");
});

test("", () => {
    var arr = ["helloworld", "world", "foobar", "barfoo", "he", "llo"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("helloworld, world");
});

test("", () => {
    var arr = ["helloworld", "world", "foobarhelloworld", "barfoo", "he", "llo"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("helloworld, foobarhelloworld");
});