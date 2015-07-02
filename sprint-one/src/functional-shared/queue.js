var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create var someInstance = object
  var someInstance = {};
  //create count property = 0
  someInstance.count = 0;
  //create storage property = {}
  someInstance.storage = {};
  //use extend to add queueMethods
  _.extend(someInstance, queueMethods);
  //return someInstance
  return someInstance;
};

var queueMethods = {};

//create dequeue
queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

//enqueue
queueMethods.dequeue = function() {
  if(this.count > 0) {
    var temp = this.storage[0];
    for(var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[++i];
    }
    delete this.storage[this.count];
    this.count--;
    return temp;
  }
};

//size
queueMethods.size = function() {
  return this.count;
}




