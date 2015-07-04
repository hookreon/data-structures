var BinarySearchTree = function(value){
  var binarySearch = Object.create(binaryPrototype);
  binarySearch.value = value;
  binarySearch.left = null;
  binarySearch.right = null;

  return binarySearch;
};

var binaryPrototype = {};

binaryPrototype.insert = function(value) {
  var currentNode = this;
  var leaf = BinarySearchTree(value);

  if(value < currentNode.value) {
    if(currentNode.left === null) {
      currentNode.left = leaf;
    } else {
      currentNode.left.insert(value);
    }
  }
  if(value > currentNode.value) {
    if(currentNode.right === null) {
      currentNode.right = leaf;
    } else {
      currentNode.right.insert(value);
    }
  }
};

binaryPrototype.contains = function(target) {
  var currentNode = this;

  if(currentNode.value === target) {
    return true;
  }

  if(target < currentNode.value) {
    if(!currentNode.left) {
      return false;
    } else {
      return currentNode.left.contains(target);
    }
  }

  if(target > currentNode.value) {
    if(!currentNode.right) {
      return false;
    } else {
      return currentNode.right.contains(target);
    }
  }
};

binaryPrototype.depthFirstLog = function(cb) {
  var currentNode = this;
  cb(currentNode.value);

  if (currentNode.left) {
    currentNode.left.depthFirstLog(cb);
  }

  if (currentNode.right) {
     currentNode.right.depthFirstLog(cb);
  }




  //
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

