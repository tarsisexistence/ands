/**
 * Leetcode #50
 * Difficulty: Medium
 * https://leetcode.com/problems/powx-n/
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export const myPow = (x, n) => {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return pow(x, n);

  function pow(x, n) {
    if (n === 0) {
      return 1.0;
    }

    const half = pow(x, Math.floor(n / 2));
    const mul = half * half;

    return n % 2 === 0 ? mul : mul * x;
  }
};

// export const myPow = (x, n) => {
//   let value = 1;
//
//   if (n < 0) {
//     x = 1 / x;
//   }
//
//   for (let i = 0; i < Math.abs(n); i += 1) {
//     value *= x;
//   }
//
//   return Number(value.toFixed(5));
// };
