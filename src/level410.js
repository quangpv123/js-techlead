function largestOverlapOfSubstring(arr){
    var maxOverlap = 0;
    var twoStringMaxOverlap = "";
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            var overlap = 0;
            for(k=0; k<arr[i].length; k++){
               if (arr[j].includes(arr[i][k])){
                    overlap++;
               }                
            }
            if(overlap > maxOverlap){
                maxOverlap = overlap;
                var str1 = arr[i];
                var str2 = arr[j];
                twoStringMaxOverlap = [str1, str2];
            }
        }
    }
    
    var m = str1.length;
    var n = str2.length;
    var longest = 0;
    var endIndex = 0;
    var matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1] + 1;
          if (matrix[i][j] > longest) {
            longest = matrix[i][j];
            endIndex = i - 1;
          }
        } else {
          matrix[i][j] = 0;
        }
      
      }
  }
  var str3 = str1.substring(endIndex - longest + 1, endIndex +1);
  var result = {
      'Hai chuỗi có chuỗi con dài nhất': twoStringMaxOverlap,
      'Chuỗi con chung dài nhất': str3,
      'Độ dài chuỗi con chung': str3.length
  };
  return result
}

module.exports = largestOverlapOfSubstring