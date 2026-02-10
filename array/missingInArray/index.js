function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

let arr = [1, 2, 3, 3];
console.log(findMissingNumber(arr, 4));
