function reverseArray(arr){
    var reverseArr = [];
    arr.forEach((element) => {
        reverseArr.unshift(element);
    });
    return reverseArr;
}

module.exports = reverseArray