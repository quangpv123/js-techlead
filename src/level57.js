function mapKey(keys, collections) {
    return collections.map(function(obj) {
      return keys.reduce(function(acc, key) {
        if (obj.hasOwnProperty(key)) {
          acc[key] = obj[key];
        }
        return acc;
      }, {});
    });
  }

  module.exports = mapKey