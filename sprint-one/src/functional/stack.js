var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // Add value
    storage[key] = value;
    // increment key
    key += 1;

  };

  someInstance.pop = function() {
    if (key !== 0) {
      var tempObj = {};
      // Decrement key
      key -= 1;
      // Store last element to to popped
      var lastElement = storage[key];

      for (var i = 0; i < Object.keys(storage).length - 1; i++) {
        tempObj[Object.keys(storage)[i]] = storage[i];
      }
      storage = tempObj;

      return lastElement;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
