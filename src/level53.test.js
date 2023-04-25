const removeDuplicatedElements = require("./level53");

test ("", () => {
    var arr = [1, 2, 2, 3, 3, 4, 5];
    expect(removeDuplicatedElements(arr)).toEqual([1, 2, 3, 4, 5]);
});

test ("", () => {
    var arr = ['a', 'b', 'a', 'bc', 11, -9, 11];
    expect(removeDuplicatedElements(arr)).toEqual(['a', 'b', 'bc', 11, -9]);
});

test ("", () => {
    var arr = ['javascript', 'dart', 'ruby', 'php', 'dart'];
    expect(removeDuplicatedElements(arr)).toEqual(['javascript', 'dart', 'ruby', 'php']);
});

test ("", () => {
    var arr = [-555, 9, -555, 'javascript', 'dart', 'ruby', 'php', 'dart'];
    expect(removeDuplicatedElements(arr)).toEqual([-555, 9, 'javascript', 'dart', 'ruby', 'php']);
});



