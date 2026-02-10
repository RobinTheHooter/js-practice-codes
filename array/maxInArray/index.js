function maxInArray(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [-1, 23, 0, 69];
console.log(maxInArray(arr));
