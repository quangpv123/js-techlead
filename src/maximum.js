function maximum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(0, sum + arr[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
  }

  module.exports = maximum