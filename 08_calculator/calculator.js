const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let nums of array) {
    sum += nums;
  }
  return sum;
};

const multiply = function (array) {
  let result = 1;
  for (let i of array) {
    result *= i;
  }
  return result;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
