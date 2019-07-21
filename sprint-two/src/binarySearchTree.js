var BinarySearchTree = function(value) {
  
  var bTree = Object.create(bTreeMethods); 

  bTree.value = value;

  bTree.left;

  bTree.right;

  return bTree; 
};

var bTreeMethods = {};

bTreeMethods.insert = function(value) {
  var check = function(tree) {
    if (value < tree.value) {
      if ( tree.left ) {
        check(tree.left);
      } else {
        tree.left = BinarySearchTree(value);
      }
    } else {
      if ( tree.right) {
        check(tree.right);
      } else {
        tree.right = BinarySearchTree(value);
      }
    }
  };
  check(this);
};

bTreeMethods.contains = function(value) {
  var result = false;
  var checkVal = function(tree) {
    if (value === tree.value) {
      return result = true;
    } 
    if (tree.left) {
      checkVal(tree.left);
    } 
    if (tree.right) {
      checkVal(tree.right);
    }  
  };
  checkVal(this);
  return result;
};

bTreeMethods.depthFirstLog = function(cb) {
  var recur = function(tree) {
    cb(tree.value);
    if ( tree.left ) {
      recur(tree.left);
    }
    if ( tree.right ) {
      recur(tree.right);
    }
  };
  recur(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





















