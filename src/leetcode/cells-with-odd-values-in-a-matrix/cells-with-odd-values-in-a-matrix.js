/**
 * Leetcode #1252
 * Difficulty: Easy
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 */
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
export const oddCells = (n, m, indices) => {
  const matrix = [];

  for (let i = 0; i < n; i += 1) {
    matrix.push(Array.from({ length: m }, () => 0));
  }

  for (let index = 0; index < indices.length; index += 1) {
    const [row, column] = indices[index];

    for (let i = 0; i < n; i += 1) {
      matrix[i][column]++;
    }

    for (let i = 0; i < m; i += 1) {
      matrix[row][i]++;
    }
  }

  return matrix.reduce(
    (odds, row) => odds + row.filter(num => num % 2 === 1).length,
    0
  );
};
// more imperative solution
// const oddCells = (n, m, indices) => {
//   const matrix = [];
//
//   for (let i = 0; i < n; i += 1) {
//     matrix.push(Array.from({ length: m }, () => 0));
//   }
//
//   for (let index = 0; index < indices.length; index += 1) {
//     const [row, column] = indices[index];
//
//     for (let i = 0; i < n; i += 1) {
//       for (let j = 0; j < m; j += 1) {
//         if (i === row) {
//           matrix[i][j]++;
//         }
//
//         if (j === column) {
//           matrix[i][j]++;
//         }
//       }
//     }
//   }
//
//   return matrix.reduce(
//     (odds, row) => odds + row.filter(num => num % 2 === 1).length,
//     0
//   );
// };
