const repeatString = function (string, repeatNum) {
  let output = '';
  if (repeatNum < 0) {
    output = 'ERROR';
  } else {
    for (let i = 0; i < repeatNum; i++) {
      output += string;
    }
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
