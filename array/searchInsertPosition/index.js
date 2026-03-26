var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // If not found, 'start' is naturally the insertion point
  return start;
};

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(searchInsert(arr,9))