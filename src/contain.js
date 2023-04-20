function inNumber(str){
    var chuoiArr = str.split(' ');
    var number = 0;
    for (i=0; i < chuoiArr.length; i++){
        if(chuoiArr[i].includes('a')){
            number++
        }
    }
    return number;
};

module.exports = inNumber


// function chuoi(str) {
//    var containArr = str.split(' ');
//    for(i=0;i<containArr.length;i++){
//     if (containArr[i].indexOf('a') !== -1){
//         var containStr = containArr[i];
//     }
//    }
//    return containStr;
// }