const palindromes = function (str) {
    const modifiedStr = str
    .split(' ')
    .join('')
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .toLowerCase();
//   console.log(modifiedStr);
  const reverseStr = modifiedStr.split('').reverse().join('');
//   console.log(reverseStr);
  if (modifiedStr == reverseStr) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
