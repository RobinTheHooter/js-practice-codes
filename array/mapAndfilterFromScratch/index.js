function mapMethod(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

const doubled = mapMethod(numbers, function (num) {
  return num * 2;
});

console.log(doubled);

function filterMethod(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const filtered = mapMethod(numbers, function (greater) {
  return greater > 2;
});

console.log(filtered);
