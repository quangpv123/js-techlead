const medianOfNumber = require("./median");
test ("", () => {
    var str = "5 3 2 4 1"
    expect(medianOfNumber(str)).toBe(3);
});

test ("", () => {
    var str = "5 3 2 4 1 9 10"
    expect(medianOfNumber(str)).toBe(4);
});

test ("", () => {
    var str = "-5 5 3 2 4 1"
    expect(medianOfNumber(str)).toBe(2.5);
});


test ("", () => {
    var str = "5 3 2 4 1 6"
    expect(medianOfNumber(str)).toBe(3.5);
});