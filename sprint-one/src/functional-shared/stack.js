var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.key = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    // Add value
    this.storage[this.key] = value;
    // increment key
    this.key += 1;

  },
  pop: function() {
    if (this.key !== 0) {
      var tempObj = {};
      // Decrement key
      this.key -= 1;
      // Store last element to to popped
      var lastElement = this.storage[this.key];

      for (var i = 0; i < Object.keys(this.storage).length - 1; i++) {
        tempObj[Object.keys(this.storage)[i]] = this.storage[i];
      }
      this.storage = tempObj;

      return lastElement;
    }
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};



