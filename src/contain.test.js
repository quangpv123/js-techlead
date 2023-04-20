const inNumber = require("./contain");

test("", () => {
    str = 'Test in ra chuỗi chứa ký tự a';
   expect(inNumber(str)).toBe(3);
});

test("", () => {
    str = 'Test in ra chuỗi chứa ký tự a lần hai';
   expect(inNumber(str)).toBe(4);
});

test("", () => {
    str = 'Test in ra chuỗi chứa ký tự a lần ba';
   expect(inNumber(str)).toBe(4);
});

test("", () => {
    str = 'Test in ra chuỗi chứa ký tự a lần ô ba ma';
   expect(inNumber(str)).toBe(5);
});