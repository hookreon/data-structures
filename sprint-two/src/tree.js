var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target){
  var found = false;
  var recurse = function(tree) {
    if(tree.value === target) {
      found = true;
    }
    if(tree.children.length) {
      for(var i = 0; i < tree.children.length; i++) {
        recurse(tree.children[i]);
      }
    }
    return found;
  };
  return recurse(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
