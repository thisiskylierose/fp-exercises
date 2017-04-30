function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat(operation, num--);

  // var i = 0;
  // while (i < 10) {
  //   operation();
  //   i++;
  // }
}

// Do not remove the line below
module.exports = repeat;
