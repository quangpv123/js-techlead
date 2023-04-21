function longestIncreasingSubsequence(arr){
    var result = 1;
    for(i=0; i<arr.length; i++){
        if(arr[i]<arr[i+1]){
            result++
        }
    }

    return result
}

module.exports = longestIncreasingSubsequence