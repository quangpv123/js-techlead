function gruopBy(collection, keys){
    var result = {};
    for(item of collection){
        var key = item[keys];
        if(!result[key]){
            result[key] = [];
        }

        result[key].push(item);
    }
    return result
}

module.exports = gruopBy