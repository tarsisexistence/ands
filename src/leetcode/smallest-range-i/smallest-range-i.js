/**
 * Leetcode #908
 * Difficulty: Easy
 * https://leetcode.com/problems/smallest-range-i/
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
export const smallestRangeI = (A, K) => {
  const min = Math.min(...A) + K;
  const max = Math.max(...A) - K;
  return min >= max ? 0 : max - min;
};
