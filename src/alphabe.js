function alphabeOder(list){
    var alphabeArr = list.split(' ');
    var alphabeStr = alphabeArr.sort();
    return alphabeStr.join(" ");

}

module.exports = alphabeOder