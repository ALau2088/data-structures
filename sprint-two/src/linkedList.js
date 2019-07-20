var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = Node(value);
    } else {
      this.tail = Node(value);
      this.head.next = this.tail;
    }
  };

  list.removeHead = function() {
    // old head = old head
    var oldVal = this.head.value;
    var newVal = this.head.next;
    if (JSON.stringify(this.head) === JSON.stringify(this.tail)) {
      this.head = null; 
      this.tail = null;
    } else {
      //chang head to node next to head
      this.head = newVal;
    }
    //return old head
    return oldVal;
  };

  list.contains = function(target) {
    var checkNext = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkNext(node.next);
      }
    };

    if (this.head === null) {
      return false;
    } else {
      return checkNext(this.head);
    }  
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
