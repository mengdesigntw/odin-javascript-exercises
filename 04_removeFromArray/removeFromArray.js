const removeFromArray = function (arr, ...removeElements) {
  const output = arr.filter((el) => {
    for (let element of removeElements) {
      if (el === element) return false;
    }
    return true;
  });

  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
