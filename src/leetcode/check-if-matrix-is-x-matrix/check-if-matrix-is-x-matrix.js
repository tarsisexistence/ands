/**
 * Leetcode #2319
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-matrix-is-x-matrix/
 */
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
export const checkXMatrix = grid => {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid.length; j += 1) {
      const isDiagonal = i === j || i + j === grid.length - 1;

      if ((isDiagonal && grid[i][j] === 0) || (!isDiagonal && grid[i][j] !== 0)) {
        return false;
      }
    }
  }

  return true;
};
