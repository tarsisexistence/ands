/**
 * Leetcode #766
 * Difficulty: Easy
 * https://leetcode.com/problems/toeplitz-matrix/
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
export const isToeplitzMatrix = matrix => {
  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[0].length - 1; j += 1) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
};
