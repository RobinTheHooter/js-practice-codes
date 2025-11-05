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
