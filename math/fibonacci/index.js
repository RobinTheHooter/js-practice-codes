function fibonacci(limit) {
  if (limit <= 1) return;

  let current = 0;
  let next = 1;

  for (let i = 0; i < limit; i++) {
    console.log(current)
    console.log(next)
    next = current + next
    current = next
  }
}

fibonacci(6)
