'use strict';

let sum = 0;

for (let i = 0, i < 1000000, i++) {
  let bin = i.toString(2);
  let int = i;
  if (checkIfPalindrome(bin) && checkIfPalindrome(int)) {
    sum += int;
  }
}

let checkIfPalindrome = function(arg) {
  for (let i = 0, j = arg.length; i++, j--; i !== j) {
    if (arg[i] !== arg[j]) {
      return false;
    }
  }
  return true;
}

module.exports = () => {
  return true;
};
