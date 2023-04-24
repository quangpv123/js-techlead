function maximumProductOfAnyThreeDistinctElements(arr){
    arr.sort(function(a, b){return a-b});
    var n = arr.length;
    var max1 = arr[n-1] * arr[n-2] * arr[n-3];
    var max2 = arr[0] * arr[1] * arr[n-1];
    return Math.max(max1, max2);
}

module.exports = maximumProductOfAnyThreeDistinctElements