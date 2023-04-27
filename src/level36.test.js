const medianOfTheCombinedList = require("./level36");

test ("", () => {
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];
    expect(medianOfTheCombinedList(arr1, arr2)).toBe(3.5);
});

test ("", () => {
    var arr1 = [-5, 5, -4, 3];
    var arr2 = [1, 2, 3];
    expect(medianOfTheCombinedList(arr1, arr2)).toBe(2);
});

test ("", () => {
    var arr1 = [-100, -90, 50, 1];
    var arr2 = [-200, -300, 55];
    expect(medianOfTheCombinedList(arr1, arr2)).toBe(-90);
});

test ("", () => {
    var arr1 = [5.5, -4];
    var arr2 = [-5.5, 5.2, 6.6];
    expect(medianOfTheCombinedList(arr1, arr2)).toBe(5);
});


