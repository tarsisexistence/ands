/**
 * Leetcode #221
 * Difficulty: Medium
 * https://leetcode.com/problems/maximal-square/
 */
/**
 * @param {string[][]} matrix
 * @return {number}
 */
export const maximalSquare = matrix => {
  let maxCount = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (i > 0 && j > 0 && matrix[i][j] !== '0') {
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }

      maxCount = Math.max(maxCount, matrix[i][j]);
    }
  }

  return maxCount ** 2;
};
