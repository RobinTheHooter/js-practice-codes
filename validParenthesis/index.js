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
