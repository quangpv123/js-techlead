function ascendingOder(listNumber){
        var ascArr = listNumber.split(' ');
        var ascList = ascArr.sort(function(a, b){return a - b});
        return ascList.join(" ");
    }
module.exports = ascendingOder