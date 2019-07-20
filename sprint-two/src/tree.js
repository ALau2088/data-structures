var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var checkVal = function(tree) {
    for (var i = 0; i < tree.length; i++) {
      if (result === true) {
        return;
      } else if (tree[i].value === target) {
        //result = true;
        return result = true;      
      } else if (tree[i].children.length) {
        checkVal(tree[i].children);
      }
    }
    return;
  };
  checkVal(this.children);
  return result;
};

var tree = new Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);

tree.contains(8);


/*
 * Complexity: What is the time complexity of the above functions?
 */
