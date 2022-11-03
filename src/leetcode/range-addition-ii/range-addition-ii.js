/**
 * Leetcode #598
 * Difficulty: Easy
 * https://leetcode.com/problems/range-addition-ii
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
export const maxCount = (m, n, ops) => {
  let minRow = m;
  let minCol = n;

  for (const [row, col] of ops) {
    minRow = Math.min(minRow, row);
    minCol = Math.min(minCol, col);
  }

  return minRow * minCol;
};
