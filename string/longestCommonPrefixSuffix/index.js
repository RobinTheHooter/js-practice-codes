function longestCommonSuffix(str1, str2) {
  let result = "";

  let i = str1.length - 1;
  let j = str2.length - 1;

  while (i >= 0 && j >= 0 && str1[i] === str2[j]) {
    result = str1[i] + result;
    i--;
    j--;
  }

  return result || "no common suffix found";
}

function longestCommonPrefix(str1, str2) {
  let result = "";

  let i = 0;
  let j = 0;

  while (i >= 0 && j >= 0 && str1[i] === str2[j]) {
    result = result + str1[i];
    i++;
    j++;
  }

  return result || "no common prefix found";
}

let a = "greenflower";
let b = "greenland";

console.log(longestCommonPrefix(a, b));
console.log(longestCommonSuffix(a, b));
