const maxResult = require("./maxResult");

test ("",() => {
    arr =[1, 2, 5, 7, 6, 100, -1];
    expect(maxResult(arr)).toBe(101);
})

test ("",() => {
    arr =[1, 2, 5, 7, 6, 100, -1, -20];
    expect(maxResult(arr)).toBe(120);
})

test ("",() => {
    arr =[1, 2, 5, 7, 6, 100, -1, 1000];
    expect(maxResult(arr)).toBe(1001);
})

test ("",() => {
    arr =[1, 2, 5, 7, 6, 100, -1, 1000, 2000, -222];
    expect(maxResult(arr)).toBe(2222);
})