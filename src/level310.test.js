const sortString = require("./level310");

test ("", () => {
    var str = 'hello, js';
    expect(sortString(str)).toBe('js, hello');
});

test ("", () => {
    var str = 'hello, js, word';
    expect(sortString(str)).toBe('js, word, hello');
});

test ("", () => {
    var str = 'hello, js, word, javascript';
    expect(sortString(str)).toBe('js, word, hello, javascript');
});

test ("", () => {
    var str = 'apple, banana, orange, kiwi, strawberry';
    expect(sortString(str)).toBe('kiwi, apple, orange, banana, strawberry');
});

test ("", () => {
    var str = 'js, hello, test, lần, 5';
    expect(sortString(str)).toBe('5, js, lần, test, hello');
});