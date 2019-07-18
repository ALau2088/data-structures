class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  enqueue(value) {
    this.storage[this.key] = value;
    this.key += 1;
    return this.storage[this.key];
  }

  dequeue() {
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
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var aQueue = new Queue();