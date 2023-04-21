const numberOfStringContainA = require("./contain");

test("", () => {
    var str = 'Test in ra chuỗi chứa ký tự a';
   expect(numberOfStringContainA(str)).toBe(3);
});

test("", () => {
    var str = 'Test in ra chuỗi chứa ký tự a lần hai';
   expect(numberOfStringContainA(str)).toBe(4);
});

test("", () => {
    var str = 'Test in ra chuỗi chứa ký tự a lần ba';
   expect(numberOfStringContainA(str)).toBe(4);
});

test("", () => {
    var str = 'Test in ra chuỗi chứa ký tự a lần ô ba ma';
   expect(numberOfStringContainA(str)).toBe(5);
});