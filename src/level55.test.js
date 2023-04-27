const gruopBy = require("./level55");

test ("", () => {
    var keys = 'a';
    var collection = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}];
    expect(gruopBy(collection, keys)).toEqual({"1": [{"a": 1, "b": 2}, {"a": 1, "b": 3}], "2": [{"a": 2, "b": 2}]});
});

test ("", () => {
    var keys = 'b';
    var collection = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}];
    expect(gruopBy(collection, keys)).toEqual({"2": [{"a": 1, "b": 2}, {"a": 2, "b": 2}], "3": [{"a": 1, "b": 3}]});
});
