/**
 * Leetcode #2652
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-multiples
 */
/**
 * @param {number} n
 * @return {number}
 */
export const sumOfMultiples = function (n) {
  let output = 0;

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      output += i;
    }
  }

  return output;
};
