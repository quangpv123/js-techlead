function chunk(arr, chunkSize){
    if(arr.length <= chunkSize){
        return arr;
    }

    var chunks = [];

    for(i=0; i<arr.length; i += chunkSize){
        chunks.push(arr.slice(i, i + chunkSize));
    }

    return chunks;
}

module.exports = chunk