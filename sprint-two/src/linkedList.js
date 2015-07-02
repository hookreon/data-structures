var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if(!list.head) {
      list.head = newNode;
    }
    if ( list.tail !== null ) {
      list.tail.next = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    var recurse = function(node) {

      if(node.value === target) {
        return true;
      }
      if(node.next === null) {
        return false;
      }
      return recurse(node.next);
    };
    return recurse(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
