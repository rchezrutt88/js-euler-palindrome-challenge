'use strict';



let sumOfPalindromes = function (upTo) {
  let sum = 0;
  for (let i = 0, i < upTo, i++) {
    let bin = i.toString(2);
    let int = i;
    if (checkIfPalindrome(bin) && checkIfPalindrome(int)) {
      sum += int;
    }
  }
  return sum;
};


let checkIfPalindrome = function(arg) {
  for (let i = 0, let j = arg.length; i++, j--; i !== j) {
    if (arg[i] !== arg[j]) {
      return false;
    }
  }
  return true;
};

var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join('');

module.exports = () => {
  return true;
};
