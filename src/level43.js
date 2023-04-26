function lengthOfTheLongestSubstrings(arr){
    var shortestStr = arr.reduce((acc, str) => str.length < acc.length ? str : acc, arr[0]);
    var maxLength = 0;
    for ( i = 0; i < shortestStr.length; i++) {
      for ( j = i + 1; j <= shortestStr.length; j++) {
        var substring = shortestStr.substring(i, j);
        var check = true;
        for ( k = 0; k < arr.length; k++) {
          if (!arr[k].includes(substring)) {
            check = false;
            break;
          }
        }
        if (check && substring.length > maxLength) {
          maxLength = substring.length;
        }
      }
    }
    return maxLength;
}

module.exports = lengthOfTheLongestSubstrings