const mapKey = require("./level57");

test ("", () => {
    var keys = ['b', 'a', 'c']  
    var collections = [{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }]
    expect(mapKey(keys, collections)).toEqual([{"a": 1, "b": 1, "c": 2}, {"a": 2, "b": 1, "c": 5}, {"a": 22, "b": 11, "c": 51}]);
});