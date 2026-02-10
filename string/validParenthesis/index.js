// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char in map) {
      let top = stack.length > 0 ? stack.pop() : "";
      if (map[char] !== top) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};
