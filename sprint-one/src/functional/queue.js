var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key += 1;
    return storage[key];
  };

  someInstance.dequeue = function() {
    if (key !== 0) {
      var tempObj = {};
      // Decrement key
      // Store first element to be dequeue
      var firstElement = storage[Object.keys(storage)[0]];
      for (var i = 1; i < Object.keys(storage).length; i++) {
        tempObj[Object.keys(storage)[i]] = storage[i];
      }
      storage = tempObj;
      return firstElement;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
