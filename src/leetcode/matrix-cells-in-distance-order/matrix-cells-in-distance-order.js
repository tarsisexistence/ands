/**
 * Leetcode #1030
 * Difficulty: Easy
 * https://leetcode.com/problems/matrix-cells-in-distance-order/
 */
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
export const allCellsDistOrder = (rows, cols, r, c) => {
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const next = [i, j];
      result.push(next);
    }
  }

  result.sort((a, b) => {
    const A = Math.abs(a[0] - r) + Math.abs(a[1] - c);
    const B = Math.abs(b[0] - r) + Math.abs(b[1] - c);

    return A - B;
  });

  return result;
};
// export const allCellsDistOrder = (rows, cols, r, c) => {
//     const result = [];
//     let buckets = [];
//
//     for (let i = 0; i < rows; i += 1) {
//         for (let j = 0; j < cols; j += 1) {
//             const distance = Math.abs(i - r) + Math.abs(j - c);
//
//             if (!buckets[distance]) {
//                 buckets[distance] = [];
//             }
//
//             buckets[distance].push([i, j]);
//         }
//     }
//
//     for (const bucket of buckets) {
//         result.push(...bucket);
//     }
//
//     return result;
// };
