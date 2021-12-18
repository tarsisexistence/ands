/**
 * Leetcode #1689
 * Difficulty: Easy
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 */
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
export const countGoodRectangles = rectangles => {
  let max = 0;
  let count = 0;

  for (const [l, w] of rectangles) {
    const size = Math.min(l, w);

    if (size > max) {
      max = size;
      count = 1;
    } else if (size === max) {
      count += 1;
    }
  }

  return count;
};
