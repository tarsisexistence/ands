/**
 * Leetcode #1572
 * Difficulty: Easy
 * https://leetcode.com/problems/matrix-diagonal-sum/
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
export const diagonalSum = mat => {
  const len = mat.length;
  let sum = 0;

  for (let i = 0; i < len; i += 1) {
    const j = len - 1 - i;

    sum += mat[i][i];

    if (i !== j) {
      sum += mat[i][j];
    }
  }

  return sum;
};

// export const diagonalSum = mat => {
//   const len = mat.length;
//   let sum = 0;
//
//   for (let i = 0; i < len; i += 1) {
//     for (let j = 0; j < len; j += 1) {
//       if (i === j || len - 1 - i === j) {
//         sum += mat[i][j];
//       }
//     }
//   }
//
//   return sum;
// };
