const longestCommonSubstring = require("./level23");

test("", () => {
    var str1 = 'abcdef';
    var str2 = 'abczyzcdef';
    expect(longestCommonSubstring(str1, str2)).toBe('cdef');
});


test("", () => {
    var str1 = 'helloWorld';
    var str2 = 'helloEvery';
    expect(longestCommonSubstring(str1, str2)).toBe('hello');
});


test("", () => {
    var str1 = 'test lần 3';
    var str2 = 'lần 3 test';
    expect(longestCommonSubstring(str1, str2)).toBe('lần 3');
});

test("", () => {
    var str1 = 'longest common subsequence of the two strings';
    var str2 = 'longest common subsequence of the three strings';
    expect(longestCommonSubstring(str1, str2)).toBe('longest common subsequence of the t');
});