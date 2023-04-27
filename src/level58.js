function switchOrder(id, newOrder, arr) {
    var newArr = arr.map(function(item){
        if(item.id === id){
            item.order = newOrder;
            return item;
        }
        return item;
    })
    
    return newArr
}

module.exports = switchOrder