function positiveNegative(n) {
  if (n === 0) return "number is 0";
  if (n < 0) return "negative";
  if (n > 0) return "positive";
}

console.log(positiveNegative(-5));
