/**
 * Leetcode #2894
 * Difficulty: Easy
 * https://leetcode.com/problems/divisible-and-non-divisible-sums-difference
 */
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
export const differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i % m === 0) {
      num2 += i;
    } else {
      num1 += i;
    }
  }

  return num1 - num2;
};
