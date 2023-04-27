function NumberElementOfLongestIncresingSubsequence(arr){
    var numberElement = 1;
    for(i=0; i<arr.length; i++){
        if(arr[i]<arr[i+1]){
            numberElement++
        }
    }
    return numberElement
}

module.exports = NumberElementOfLongestIncresingSubsequence