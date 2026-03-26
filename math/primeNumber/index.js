function prime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(prime(6));

function primeInRange(a, b) {
  let result = [];
  for (let j = a; j <= b; j++) {
    if (prime(j)) {
      result.push(j);
    }
  }
  return result;
}

console.log(primeInRange(2, 10));
