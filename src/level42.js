function numberOfSubsequencesThatSumToTheTargerValue(arr, targetValue){
    var numberOfSubsequences = 0;
    for(i=0; i<arr.length; i++){
        
        for(k=i+1; k < arr.length; k++){
            var sum = arr[i];
            for (let j = k; j < arr.length; j++) {  
                if (sum > targetValue) {
                  break;
                }
      
                if (sum === targetValue) {
                  numberOfSubsequences++;
                  break;
                }
    
                if (sum < targetValue){
                    sum += arr[j];
                }
            }
        } 
    }
    return numberOfSubsequences;
}

module.exports = numberOfSubsequencesThatSumToTheTargerValue