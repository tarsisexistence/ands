/**
 * Leetcode #2022
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-1d-array-into-2d-array/
 */
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
export const construct2DArray = (original, m, n) => {
  const arr = [];

  if (m * n !== original.length) {
    return arr;
  }

  original.reverse();

  for (let i = 0; i < m; i += 1) {
    arr[i] = [];

    for (let j = 0; j < n; j += 1) {
      arr[i][j] = original.pop();
    }
  }

  return arr;
};
