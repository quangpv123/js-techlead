const switchOrder = require("./level58");

test ("", () => {
    var id = 9
    var newOrder = 1
    var arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
    expect(switchOrder(id, newOrder, arr)).toEqual([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 1}, {id: 11, order: 3}]);
});


test ("", () => {
    var id = 10
    var newOrder = 5
    var arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
    expect(switchOrder(id, newOrder, arr)).toEqual([{id: 10, order: 5}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]);
});


test ("", () => {
    var id = 12
    var newOrder = 6
    var arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
    expect(switchOrder(id, newOrder, arr)).toEqual([{id: 10, order: 0}, {id: 12, order: 6}, {id: 9, order: 2}, {id: 11, order: 3}]);
});


test ("", () => {
    var id = 11
    var newOrder = 7
    var arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
    expect(switchOrder(id, newOrder, arr)).toEqual([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 7}]);
});