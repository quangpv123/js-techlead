const trimAll = require("./level56");

test ("", () => {
    var str = '    hello     world    ';
    expect(trimAll(str)).toBe('hello world');
});

test ("", () => {
    var str = '   I    am    good      ';
    expect(trimAll(str)).toBe('I am good');
});


test ("", () => {
    var str = '   Viết   function loại     bỏ tất  cả khoảng trắng  đầu và cuối    của một      chuỗi bất kỳ     ';
    expect(trimAll(str)).toBe('Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ');
});


test ("", () => {
    var str = '   I am      Super         man     ';
    expect(trimAll(str)).toBe('I am Super man');
});

