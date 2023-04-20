function median(str){
    var strArr = str.split(' ');
    var arrOder = strArr.sort(function(a, b){return a - b});
    var a = arrOder.length;
    if(a%2 == 0) {
       var medianValue = (arrOder[(a/2)-1]+arrOder[(a/2)])/2;
    }
    else {
        var medianValue = arrOder[(a-1)/2];
    }
    return medianValue;
}

module.exports = median