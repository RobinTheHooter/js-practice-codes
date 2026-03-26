function sum(n) {
  let result = 0;
  if (n < 1) return "not possible";
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result
}

console.log(sum(3))
