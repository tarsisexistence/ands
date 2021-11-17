/**
 * Leetcode #1689
 * Difficulty: Easy
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 */
/**
 * @param {string} n
 * @return {number}
 */
export const minPartitions = n => {
  let max = 0;

  for (let i = 0; i < n.length; i += 1) {
    const value = Number(n[i]);

    if (value > max) {
      max = value;
    }
  }

  return max;
};
