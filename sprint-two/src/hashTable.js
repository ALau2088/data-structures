

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storInd = this._storage.get(index);
  // Check if bucket exists
  if (storInd === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < storInd.length; i++) {
      // Check if key exists 
      if (storInd[i][0] === k) {
        storInd[i] = [k, v];
      } else {
        storInd.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storInd = this._storage.get(index);
  if (!storInd[0]) {
    return undefined;
  }
  for (var i = 0; i < storInd.length; i++) {
    if (storInd[i][0] === k) {
      return storInd[i][1];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storInd = this._storage.get(index);
  for (var i = 0; i < storInd.length; i++) {
    if (storInd[i][0] === k) {
      delete storInd[i];
    }
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


