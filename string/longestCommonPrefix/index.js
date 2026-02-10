// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  // Initialize the prefix as the first string
  let prefix = strs[0];
  // Loop through the rest of the strings
  for (let i = 1; i < strs.length; i++) {
    // Check if the current string starts with the prefix
    // If not, shorten the prefix by one character from the end
    // Repeat until we find a match or the prefix is empty
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
