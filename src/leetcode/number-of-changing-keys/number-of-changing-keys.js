/**
 * Leetcode #3019
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-changing-keys
 */

/**
 * @param {string} s
 * @return {number}
 */
export const countKeyChanges = s => {
  let count = 0;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i].toLowerCase() !== s[i - 1].toLowerCase()) {
      count += 1;
    }
  }

  return count;
};
