const reverseArray = require("./level51");

test ("", () => {
    var arr = [1, 2, 3, 4, 5];
    expect(reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
});

test ("", () => {
    var arr = [1, 2, 3, 4, 5];
    expect(reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
});

test ("", () => {
    var arr = [1, 2, 3, 'a', 5, 'b'];
    expect(reverseArray(arr)).toEqual(['b', 5, 'a', 3, 2, 1]);
});

test ("", () => {
    var arr = ['a', 'b', 'g', 'k' , 'q'];
    expect(reverseArray(arr)).toEqual(['q', 'k', 'g', 'b', 'a']);
});