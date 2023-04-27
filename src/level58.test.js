const switchOrder = require("./level58");

test("", () => {
    var id = 9;
    var newOrder = 1;
    var arr = [{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 2}, {id: 11, order: 3}]
    expect(switchOrder(id, newOrder, arr)).toEqual([{id: 10, order: 0}, {id: 12, order: 1}, {id: 9, order: 1}, {id: 11, order: 3}]);
});
