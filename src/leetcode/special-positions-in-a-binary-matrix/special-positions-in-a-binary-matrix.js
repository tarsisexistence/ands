/**
 * Leetcode #1582
 * Difficulty: Easy
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
export const numSpecial = mat => {
  const cols = [];
  const rows = [];
  let count = 0;

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j]) {
        rows[i] = (rows[i] ?? 0) + 1;
        cols[j] = (cols[j] ?? 0) + 1;
      }
    }
  }

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        count += 1;
      }
    }
  }

  return count;
};
