const sumAll = function (val1, val2) {
  if (val1 < 0 || val2 < 0) return 'ERROR';
  if (!Number.isInteger(val1) || !Number.isInteger(val2)) return 'ERROR';
  let sum = 0;
  val2 > val1 ? (sum = ((val1 + val2) * val2) / 2) : (sum = ((val1 + val2) * val1) / 2);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
