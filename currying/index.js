// Create a function that can be called repeatedly with single arguments to accumulate a sum.
// When called with no arguments, it should return the total sum of all previously provided arguments.

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}
console.log(sum(1)(2)(3)(4)(5)());
