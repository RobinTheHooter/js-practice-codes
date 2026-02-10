// Haystack is the main string where we search for the needle
// Needle is the substring we are searching for
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

var strStrBruteForce = function (haystack, needle) {
  const N = haystack.length;
  const M = needle.length;

  // Handle the edge case where the needle is empty
  if (M === 0) {
    return 0;
  }

  // Outer loop: Iterate through all possible starting positions in haystack
  for (let i = 0; i <= N - M; i++) {
    let j = 0;
    console.log(i)
    // Inner loop: Compare characters of the needle against the current slice of haystack
    while (j < M && haystack[i + j] === needle[j]) {
      j++;
    }

    // If the inner loop completed (j equals the length of the needle), a match was found
    if (j === M) {
      return i; // Return the starting index of the match
    }
  }

  // If the outer loop finishes without finding a match
  return -1;
};

const a = strStrBruteForce("hello", "ll");
console.log(a); // Output: 2
