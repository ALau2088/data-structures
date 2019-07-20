

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var Node = function() {
    this.value = node;
    this.edge = [];
  };
  this.nodes.push(new Node());
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    var rem = this.nodes[i].value;
    if (this.nodes[i].value === node) {
      this.nodes.splice(i, 1);
    } 
    this.removeEdge(node, rem);
  }  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var j = 0; j < this.nodes[i].edge.length; j++) {
        if (this.nodes[i].edge[j] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      this.nodes[i].edge.push(toNode);
    }
    if (this.nodes[i].value === toNode) {
      this.nodes[i].edge.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var j = 0; j < this.nodes.length; j++) {
        if (this.nodes[i].edge[j] === toNode) {
          this.nodes[i].edge.splice(j, 1);
        }
      }
    }
  }
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      for (var j = 0; j < this.nodes.length; j++) {
        if (this.nodes[i].edge[j] === fromNode) {
          this.nodes[i].edge.splice(j, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value); 
  }
}; 



/*
 * Complexity: What is the time complexity of the above functions?
 */


