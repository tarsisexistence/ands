/**
 * Leetcode #1317
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
export const getNoZeroIntegers = n => {
  for (let i = 0; i < n - 1; i += 1) {
    const num = i + 1;

    const hasZeroLeft = String(num).includes('0');
    const hasZeroRight = String(n - num).includes('0');

    if (!hasZeroLeft && !hasZeroRight) {
      return [num, n - num];
    }
  }

  return [1, 1];
};
