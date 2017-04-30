function duckCount() {
  var args = new Array().slice.call(arguments).filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  });

  return args.length;
}

module.exports = duckCount;
