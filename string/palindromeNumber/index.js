// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  let origNum = x;
  let revNum = Number(String(x).split("").reverse().join(""));
  if (origNum === revNum) return true;
  return false;
};

function palindromeNumberStringVersion(x) {
  if (x < 0) return false;

  let num = String(x);

  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    if (num[left] !== num[right]) return false;
    left++;
    right--;
  }
  return true;
}

function palindromeNumberMathVersion(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversedHalf = 0;

  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

console.log(palindromeNumberMathVersion(22))
   