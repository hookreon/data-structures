

var Graph = function(){

};

Graph.prototype.addNode = function(node){
  this[node] = [];
};

Graph.prototype.contains = function(node){
  return this.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  if(this.hasOwnProperty(node)) {
    delete this[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this[fromNode].length; i++) {
    if(this[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromResult = _.indexOf(this[fromNode], toNode);
  var toResult = _.indexOf(this[toNode], fromNode);
   if (fromResult > -1) {
     this[fromNode].splice(fromResult, 1);
     this[toNode].splice(toResult, 1);
   }

};

Graph.prototype.forEachNode = function(cb){
  var nodes = this;
  _.each(nodes, function(val, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


