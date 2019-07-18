var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key += 1;
  return this.storage[this.key];
};
Queue.prototype.dequeue = function() {
  if (this.key !== 0) {
    var tempObj = {};
    // Decrement key
    // Store first element to be dequeue
    var firstElement = this.storage[Object.keys(this.storage)[0]];
    for (var i = 1; i < Object.keys(this.storage).length; i++) {
      tempObj[Object.keys(this.storage)[i]] = this.storage[i];
    }
    this.storage = tempObj;
    return firstElement;
  }
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
var aQueue = new Queue();


