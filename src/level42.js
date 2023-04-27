function numberOfSubsequencesThatSumToTheTargerValue(nums, target) {
    var dp = new Array(nums.length + 1).fill(0);
    dp[0] = 1;
    for (i = 1; i <= nums.length; i++) {
      for (j = target; j >= nums[i - 1]; j--) {
        dp[j] += dp[j - nums[i - 1]];
      }
    }
    return dp[target];
  }

module.exports = numberOfSubsequencesThatSumToTheTargerValue