function maximumSumOfContiguousSubarryy(arr) {
    var maxSum = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = Math.max(0, sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
  }

  module.exports = maximumSumOfContiguousSubarryy