const minimunNumberOfMovesToSortInAscendingOder = require("./level41");

test ("", () => {
    var arr = [3, 1, 4, 2, 6, 5];
    expect(minimunNumberOfMovesToSortInAscendingOder(arr)).toBe(4);
});


test ("", () => {
    var arr = [1, 2, 3, 4, 5, 6];
    expect(minimunNumberOfMovesToSortInAscendingOder(arr)).toBe(0);
});


test ("", () => {
    var arr = [3, 1, 4, 2, 6, 5, 9];
    expect(minimunNumberOfMovesToSortInAscendingOder(arr)).toBe(4);
});

test ("", () => {
    var arr = [3, 1, 4, 2, 6, 5, 9, 10];
    expect(minimunNumberOfMovesToSortInAscendingOder(arr)).toBe(4);
});

test ("", () => {
    var arr = [3, 1, 4, 2, 6, 5, 9, 10, 8];
    expect(minimunNumberOfMovesToSortInAscendingOder(arr)).toBe(6);
});