function median(str){
    var strArr = str.split(' ');
    var arrOder = strArr.sort((function(a, b){return a - b}));
    var a = arrOder.length;
    if(a%2 == 0) {
        var medianValue = (parseInt(arrOder[a/2-1])+parseInt(arrOder[a/2]))/2;
    }
    else {
        var medianValue = parseInt(arrOder[(a-1)/2]);
    }
    return medianValue;
}

module.exports = median