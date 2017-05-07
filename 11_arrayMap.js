module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function (acc, item, index, arr) {
    console.log(acc, item);
    acc.push(fn.call(null, item, index, arr));
    return acc;
  }, []);
};
