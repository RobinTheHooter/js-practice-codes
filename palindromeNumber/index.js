// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    let origNum = x;
    let revNum = Number(String(x).split('').reverse().join(''))
    if (origNum === revNum) return true
    return false
};