/**
 * Leetcode #1051
 * Difficulty: Easy
 * https://leetcode.com/problems/height-checker/
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
export const heightChecker = heights => {
  const heightsByOrder = Array.from(heights).sort((a, b) => a - b);
  let minMovements = 0;

  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] !== heightsByOrder[i]) {
      minMovements += 1;
    }
  }

  return minMovements;
};
