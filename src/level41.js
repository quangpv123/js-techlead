function minimunNumberOfMovesToSortInAscendingOder(arr){
    var minimumNumberOfMoves = 0;
    for(i=0; i < arr.length; i++){
        for(j=i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var location = arr[i];
                arr[i] = arr[j];
                arr[j] = location;
                minimumNumberOfMoves++
            }
        }
    }
    return minimumNumberOfMoves;
}

module.exports = minimunNumberOfMovesToSortInAscendingOder