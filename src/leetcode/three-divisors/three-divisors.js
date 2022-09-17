/**
 * Leetcode #1952
 * Difficulty: Easy
 * https://leetcode.com/problems/three-divisors/
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isThree = n => {
  let count = 0;

  for (let i = 0; i < n; i += 1) {
    if (n % (i + 1) === 0) {
      count += 1;
    }
  }

  return count === 3;
};
