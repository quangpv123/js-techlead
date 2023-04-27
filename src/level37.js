function lengthOfTheLongestPalindrome(str){
    var newString = str.replace(/\s+/g, '').toLowerCase();
    var charCounts = {};
    var maxLength = 1;
    for(i=0; i < newString.length; i++){
      var char = newString[i];
      if(charCounts[char]){
          charCounts[char]++;
      }
        else {
            charCounts[char] = 1;
        } 
    }
    
    for(a of Object.values(charCounts)){
        if(a%2 === 0){
            maxLength += a;
        }
        else {
            maxLength += a - 1;
        }
    }   
    
    return maxLength;
}

module.exports = lengthOfTheLongestPalindrome