function removeDuplicatedElements(arr){
    var newArray = [];
    arr.forEach((element) => {
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

module.exports = removeDuplicatedElements