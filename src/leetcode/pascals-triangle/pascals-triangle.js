/**
 * Leetcode #118
 * Difficulty: Easy
 * https://leetcode.com/problems/pascals-triangle/
 */
/**
 * @param {number} rows
 * @return {number[][]}
 */
export const generate = rows => {
  const cols = [[1]];

  for (let i = 1; i < rows; i += 1) {
    const currentCol = [];
    const prevCol = cols[i - 1];
    const len = prevCol.length + 1;

    for (let j = 0; j < len; j += 1) {
      const left = (prevCol && prevCol[j - 1]) || 0;
      const right = (prevCol && prevCol[j]) || 0;
      currentCol.push(left + right);
    }

    cols.push(currentCol);
  }

  return cols;
};
