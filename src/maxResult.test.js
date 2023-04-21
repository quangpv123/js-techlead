const maximumDifferenceBetweenTwoElements = require("./maxResult");

test ("",() => {
    var arr =[1, 2, 5, 7, 6, 100, -1];
    expect(maximumDifferenceBetweenTwoElements(arr)).toBe(101);
})

test ("",() => {
    var arr =[1, 2, 5, 7, 6, 100, -1, -20];
    expect(maximumDifferenceBetweenTwoElements(arr)).toBe(120);
})

test ("",() => {
    var arr =[1, 2, 5, 7, 6, 100, -1, 1000];
    expect(maximumDifferenceBetweenTwoElements(arr)).toBe(1001);
})

test ("",() => {
    var arr =[1, 2, 5, 7, 6, 100, -1, 1000, 2000, -222];
    expect(maximumDifferenceBetweenTwoElements(arr)).toBe(2222);
})

test ("",() => {
    arr =[1, 2, 5, 7, 6, 100, -1, 1000, 2000, -222, -555.555];
    expect(maximumDifferenceBetweenTwoElements(arr)).toBe(2555.555);
})