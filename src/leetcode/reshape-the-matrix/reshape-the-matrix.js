/**
 * Leetcode #566
 * Difficulty: Easy
 * https://leetcode.com/problems/reshape-the-matrix/
 */
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
export const matrixReshape = (mat, r, c) => {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  const collection = [];
  const result = [];

  for (let i = mat.length - 1; i >= 0; i -= 1) {
    for (let j = mat[i].length - 1; j >= 0; j -= 1) {
      collection.push(mat[i][j]);
    }
  }

  for (let i = 0; i < r; i += 1) {
    result[i] = [];

    for (let j = 0; j < c; j += 1) {
      result[i][j] = collection.pop();
    }
  }

  return result;
};
