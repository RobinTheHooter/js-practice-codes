function reverseAString(str) {
  // return str.split("").reverse().join("") // using in built methods
  let splitStr = str.split("");

  let left = 0;
  let right = splitStr.length - 1;

  while (left < right) {
    // [splitStr[left], splitStr[right]] = [splitStr[right], splitStr[left]]; // modern destructuring assignment

    let temp = splitStr[left];
    splitStr[left] = splitStr[right];
    splitStr[right] = temp;

    left++;
    right--;
  }
  return splitStr.join("");
}

let n = "down";
console.log(reverseAString(n));
