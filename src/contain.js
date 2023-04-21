function numberOfStringContainA(str){
    var chuoiArr = str.split(' ');
    var number = 0;
    for (i=0; i < chuoiArr.length; i++){
        if(chuoiArr[i].includes('a')){
            number++
        }
    }
    return number;
};

module.exports = numberOfStringContainA