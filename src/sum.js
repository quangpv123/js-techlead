function sumOfNumberDivisible3And5(str){
    var newArr = str.split(' ');
    var sum3and5 = 0;
    for (var a of newArr){
        var aNum = parseInt(a);
        if(aNum%3==0&&aNum%5==0){
                sum3and5 += aNum;
        }
    }
    return sum3and5;
};

module.exports = sumOfNumberDivisible3And5