function longestIncreasingSubsequence(arr){
    var longestArray = [];
    var currentArray = [];
        for (i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] - arr[i - 1] === 1) {
          currentArray.push(arr[i]);
        }
        else {
          if (currentArray.length > longestArray.length) {
            longestArray = currentArray;
          }
           currentArray = [arr[i]];
        }
    }

  if (currentArray.length > longestArray.length) {
    longestArray = currentArray;
  }

  return longestArray.length;
}

module.exports = longestIncreasingSubsequence