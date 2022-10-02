/**
 * Leetcode #2427
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-common-factors
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const commonFactors = (a, b) => {
  const max = Math.max(a, b);
  let count = 0;

  for (let i = 0; i < max; i += 1) {
    const num = i + 1;

    if (a % num === 0 && b % num === 0) {
      count += 1;
    }
  }

  return count;
};
