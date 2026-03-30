function highAndLow(integers) {
  const arr = integers.split(" ");
  let high = -Infinity;
  let low = Infinity;

  for (let s of arr) {
    let n = Number(s);
    if (n > high) high = n;
    if (n < low) low = n;
  }

  return `${high} ${low}`;
}

// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
