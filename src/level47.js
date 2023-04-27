function sortTheStringFromLongToShort(arr){
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length-1-i; j++){
            if(arr[j].length < arr[j+1].length){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

            if(arr[j].length === arr[j+1].length){
                if(arr[j].localeCompare(arr[j+1]) > 0){
                    var temp2 = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp2;
                }
            }
        }
    }

    return arr.join(', ')

}

module.exports = sortTheStringFromLongToShort