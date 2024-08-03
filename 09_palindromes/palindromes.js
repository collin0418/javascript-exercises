const palindromes = function (str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr;
};
console.log(palindromes("racecar"));
// Do not edit below this line
module.exports = palindromes;
