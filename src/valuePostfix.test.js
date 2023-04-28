const valuePostfix = require('./valuePostfix');

test ('', () => {
    var infix = '1 2 3 4 + * +';
    expect(valuePostfix(infix)).toBe(15);
});