var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    bucket = [];
  } else {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j][1] = v;
      }
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(bucket) {
    for(var j = 0; j < bucket.length;j++) {
      if(bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(bucket) {
    bucket = _.reject(bucket, function(kvp){
      return kvp[0] === k;
    });
  }
  this._storage.set(i, bucket);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
