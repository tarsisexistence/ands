/**
 * Leetcode #867
 * Difficulty: Easy
 * https://leetcode.com/problems/transpose-matrix/
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
export const transpose = A => {
  const { length: rows } = A;
  const { length: cols } = A[0];
  const tA = Array.from({ length: cols }, () => new Array(rows));

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      tA[j][i] = A[i][j];
    }
  }

  return tA;
};
