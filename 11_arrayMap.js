module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(null, item, index, arr));

    return acc;
  }, []);
};
