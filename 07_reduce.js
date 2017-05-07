function reduce(arr, fn, obj) {
  // if (arr.length > 0) {
  //   var newObj = fn(obj, arr[0]);
  //
  //   return reduce(arr.slice(1), fn, newObj);
  // }
  //
  // return obj;
  var reduceOne = function (index, newObj) {
    if (index > arr.length - 1) return newObj;

    return reduceOne(index + 1, fn(newObj, arr[index], index, arr));
  };

  return reduceOne(0, obj);
}

module.exports = reduce;
