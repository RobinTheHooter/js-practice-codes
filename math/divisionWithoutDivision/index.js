var divideBruteforced = function (dividend, divisor) {
  let quotient = 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  while (absDivisor <= absDividend) {
    absDividend = absDividend - absDivisor;
    quotient += 1;
  }
  if (quotient >= 2147483647) {
    return 2147483647;
  } else if (quotient < -2147483648) {
    return -2147483648;
  }
  return (dividend < 0) ^ (divisor < 0) ? -quotient : quotient;
};

var divide = function(dividend, divisor) {
  // Handle overflow case directly
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  const sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;
  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  let quotient = 0;

  while (absDividend >= absDivisor) {
    let temp = absDivisor, multiple = 1;
    while (absDividend >= (temp << 1)) {
      temp <<= 1;
      multiple <<= 1;
    }
    absDividend -= temp;
    quotient += multiple;
  }

  return sign * quotient;
};

console.log(divide(-2147483648, -1));
