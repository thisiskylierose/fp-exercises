function Spy(target, method) {
  var func = target[method];
  var result = { count: 0 };

  target[method] = function () {
    result.count += 1;

    return func.apply(this, arguments);
  };

  return result;
}

module.exports = Spy;
