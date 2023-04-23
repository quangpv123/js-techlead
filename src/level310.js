function sortString(str){
    var arr = str.split(', ');
    for(i=0; i < arr.length; i++){
        for(j=i+1; j < arr.length; j++){
            if(arr[i].length > arr[j].length){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join(', ').trim();
}

module.exports = sortString