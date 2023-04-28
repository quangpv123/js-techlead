const toPostfix = require('./postfix');

test ('', () => {
    var infix = '3 + 4 * 2 / (1 - 5)';
    expect(toPostfix(infix)).toBe('3 4 2 * 1 5 - / +');
});


test ('', () => {
    var infix = '13 - 6 * ( 3 + 6 ) / 21 - 9 + ( 89 - 76 )';
    expect(toPostfix(infix)).toBe('13 6 3 6 + * 21 / - 9 - 89 76 - +');
});

test ('', () => {
    var infix = '1 + 2 * (3 + 4)';
    expect(toPostfix(infix)).toBe('1 2 3 4 + * +');
});
