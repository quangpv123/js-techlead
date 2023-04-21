function bigestNumber(num){
    const maxNumber = num[0];
    for(i=1; i<num.length; i++){
        if(num[i]>maxNumber){
            maxNumber = num[i];
        }
    }
    return maxNumber;
}

module.exports = bigestNumber