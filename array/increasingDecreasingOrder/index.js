// write a function to return the array in increasing decreasing order
// example input: [1,11,1,333,4,2,1,5], output: [1,  1, 1, 2, 333, 11, 5, 4]

function asc(arr) {
  // let sortArr =  [...arr].sort((a, b) => a - b)

  // let firstHalf = sortArr.slice(0, Math.floor(arr.length / 2))

  // let secondHalf = sortArr.slice(Math.floor(arr.length / 2)).reverse()

  // let newArr = [...firstHalf, ...secondHalf]

  // return newArr
  arr.sort((a, b) => a - b);

  let arrLength = arr.length;
  let start = arr.length / 2;
  let end = arrLength - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

const nums = [1, 11, 1, 333, 4, 2, 1, 5];

console.log(asc(nums));
