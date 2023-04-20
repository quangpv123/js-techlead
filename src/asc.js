function asc(listNumber){
        ascArr = listNumber.split(' ');
        ascList = ascArr.sort(function(a, b){return a - b});
        return ascList.join(" ");
    }
module.exports = asc