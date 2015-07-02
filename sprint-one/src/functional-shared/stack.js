var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

// create someInstance object
   var someInstance = {};
  // create storage property
  someInstance.storage = {};
   // count property
  someInstance.count = 0;

  // use extend to add stackMethods to someInstance
  _.extend(someInstance, stackMethods);
  // return someInstance
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  console.log(this);
  this.storage[this.count] = value;
  this.count++;
   console.log(this);
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
    var temp = this.storage[this.count];
    delete this.storage[this.count];
  }
  return temp;
}

stackMethods.size = function() {
  return this.count;
}


