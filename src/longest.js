function longestWordInTheList(str){
    var longArr = str.split(' ');
    var longestWord = longArr[0];
    for(i=1; i<longArr.length; i++){
        if(longArr[i].length>longestWord.length){
            longestWord = longArr[i];
        }
    }
    return longestWord;
}
module.exports = longestWordInTheList