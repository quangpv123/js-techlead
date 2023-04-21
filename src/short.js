function shortestString(str){
    var arr = str.split(' ');
    var minLength = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i].length < minLength.length){
            minLength = arr[i];
        }
    }
    return minLength;
}

module.exports = shortestString