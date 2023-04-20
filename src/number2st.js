function number(str){
    var numberArr = str.split(' ');
    var numberOder = numberArr.sort(function(a, b){return a - b});
    var number2st = numberOder[numberOder.length-2];
    return parseInt(number2st);

}

module.exports = number