const reverseString = function (string) {
  const arr = string.split('');
  //arr = [h e l l o] 4-0
  let output = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    output += arr[i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
