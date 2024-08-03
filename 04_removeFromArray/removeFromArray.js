const removeFromArray = function (arr, ...eles) {
  return arr.filter((item) => !eles.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
