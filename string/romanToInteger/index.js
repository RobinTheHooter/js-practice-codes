// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

var romanToInt = function (s) {
  const map = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  let origVal = s.toLowerCase().split("");
  console.log(origVal);
  let finalVal = 0;
  for (let i = 0; i < origVal.length; i++) {
    if (map[origVal[i]] >= map[origVal[i + 1]] || i === origVal.length - 1) {
      finalVal += map[origVal[i]];
      console.log(map[origVal[i]]);
    } else {
      finalVal -= map[origVal[i]];
    }
  }
  return finalVal;
};
