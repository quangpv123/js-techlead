function maximumDifferenceBetweenTwoElements(arr){
    arrOder = arr.sort(function(a, b){return a - b});
    var a = arrOder.length;
    return arrOder[a-1]-arrOder[0];
}

module.exports = maximumDifferenceBetweenTwoElements