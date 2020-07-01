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
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[0].length; j += 1) {
      if (matrix[i - 1][j - 1] !== matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
};
