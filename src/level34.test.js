const twoStringLargestOverlapOfCharacters = require("./level34");

test("", () => {
    var arr = ["abcdefg", "cdefghijklm", "ghijklmnopqr"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("abcdefg, cdefghijklm");
});


test("", () => {
    var arr = ["hello", "world", "foobar", "barfoo", "he", "llo"];
    expect(twoStringLargestOverlapOfCharacters(arr)).toBe("foobar, barfoo");
});