/**
 * Leetcode #521
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-uncommon-subsequence-i/
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export const findLUSlength = (a, b) => {
  if (a === b) {
    return -1;
  }

  return Math.max(a.length, b.length);
};
