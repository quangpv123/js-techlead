    function removeDuplicatedElements(arr){
        var newArr = [];
        for(i=0; i<arr.length; i++){
            var check = false;
            for(j=0; j< newArr.length; j++){            
                if(arr[i].x === newArr[j].x && arr[i].y === newArr[j].y){
                    check = true;
                    break;
                }
                
            }
            if(!check){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }

module.exports = removeDuplicatedElements