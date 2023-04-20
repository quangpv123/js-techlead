const median = require("./median");
test ("", () => {
    str = "5 3 2 4 1"
    expect(median(str)).toBe("3");
});

test ("", () => {
    str = "5 3 2 4 1 9 10"
    expect(median(str)).toBe("4");
});

test ("", () => {
    str = "-5 5 3 2 4 1"
    expect(median(str)).toBe("2.5");
});


test ("", () => {
    str = "5 3 2 4 1 6"
    expect(median(str)).toBe("3.5");
});