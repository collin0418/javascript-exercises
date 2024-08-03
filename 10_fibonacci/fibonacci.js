const fibonacci = function (n) {
  n = Number(n);
  if (isNaN(n) || n < 0) {
    return "OOPS";
  }
  if (n <= 1) return n;

  let a = 0;
  b = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
