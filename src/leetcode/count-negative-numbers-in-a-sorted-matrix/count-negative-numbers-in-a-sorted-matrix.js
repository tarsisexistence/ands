/**
 * Leetcode #1351
 * Difficulty: Easy
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const countNegatives = grid => {
  let negatives = 0;

  for (let i = grid.length - 1; i > -1; i -= 1) {
    for (let j = grid[i].length; j > -1; j -= 1) {
      if (grid[i][j] < 0) {
        negatives += 1;
      }
    }
  }

  return negatives;
};
