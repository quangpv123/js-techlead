function medianOfTheCombinedList(arr1, arr2){
    var newArray = arr1.concat(arr2);
    var newArrayOder = newArray.sort((a, b) => a-b);
    var a = newArrayOder.length;
    if(a%2 == 0) {
        var medianValue = (parseInt(newArrayOder[a/2-1])+parseInt(newArrayOder[a/2]))/2;
    }
    else {
        var medianValue = parseInt(newArrayOder[(a-1)/2]);
    }
    return medianValue;
}

module.exports = medianOfTheCombinedList