function min(arr){
    arrOder = arr.sort(function(a, b){return a-b})
    return arrOder[1];
}

module.exports = min