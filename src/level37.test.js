const lengthOfTheLongestPalindrome = require("./level37");

test("", () => {
    var str = 'A man a plan a canal Panama'
    expect(lengthOfTheLongestPalindrome(str)).toBe(21);
});

test("", () => {
    var str = 'Madam I am Adam'
    expect(lengthOfTheLongestPalindrome(str)).toBe(11);
});

test("", () => {
    var str = '833856'
    expect(lengthOfTheLongestPalindrome(str)).toBe(5);
});


