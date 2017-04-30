var slice = Array.prototype.slice;

function logger(namespace) {
  return slice.call(namespace)[0];
}

module.exports = logger;
