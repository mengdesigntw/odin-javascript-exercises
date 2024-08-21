const fibonacci = function (num) {
  let value = +num;
  if (value == 0) return 0;
  if (value < 0) return 'OOPS';
  let arr = [1, 1];
  for (i = 2; i < value; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[value - 1];
};

// Do not edit below this line
module.exports = fibonacci;

// num = 4 // val = 3
// [1, 1]

//i=2 2<4
// arr[0] + arr[1] = 2 //arr = [1,1,2]

//i=3 3<4
//arr[1] + arr[2] = 3 // arr = [1,1,2,3]
