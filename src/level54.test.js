const removeDuplicatedElements = require("./level54");

test ("", () => {
    var arr = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    expect(removeDuplicatedElements(arr)).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);
});

test ("", () => {
    var arr = [{ 'x': -5, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': -5, 'y': 2 }];
    expect(removeDuplicatedElements(arr)).toEqual([{ 'x': -5, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]);
});


test ("", () => {
    var arr = [{ 'x': 0, 'y': 1 }, { 'x': 0, 'y': -1 }, { 'x': 0, 'y': -5 }, { 'x': -5, 'y': 2 }];
    expect(removeDuplicatedElements(arr)).toEqual([{ 'x': 0, 'y': 1 }, { 'x': 0, 'y': -1 }, { 'x': 0, 'y': -5 }, { 'x': -5, 'y': 2 }]);
});