function trimAll(str){
    str = str.trim();
    while(str.includes("  ")){
        str = str.replace("  ", " ");
    }

    return str
}

module.exports = trimAll