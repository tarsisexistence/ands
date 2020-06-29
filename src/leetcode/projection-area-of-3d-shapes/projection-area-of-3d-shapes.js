/**
 * Leetcode #883
 * Difficulty: Easy
 * https://leetcode.com/problems/projection-area-of-3d-shapes/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const projectionArea = grid => {
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    let maxI = 0;
    let maxJ = 0;

    for (let j = 0; j < grid.length; j += 1) {
      const value = grid[i][j];
      const reversed = grid[j][i];

      if (value > 0) {
        result += 1;
      }

      if (reversed > maxI) {
        maxI = reversed;
      }

      if (value > maxJ) {
        maxJ = value;
      }
    }

    result += maxJ + maxI;
  }

  return result;
};
