function sumOfAllElements(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  return result;
}

const nums = [1, 11, 1, 333, 4, 2, 1, 5];

console.log(sumOfAllElements(nums));
