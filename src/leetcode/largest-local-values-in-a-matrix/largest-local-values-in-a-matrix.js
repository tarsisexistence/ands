/**
 * Leetcode #2373
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-local-values-in-a-matrix/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const largestLocal = grid => {
  const n = grid.length - 2;
  const res = Array.from({ length: n }, () => []);

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (i + n <= grid.length && j + n <= grid[i].length) {
        traverse(i, j);
      }
    }
  }

  function traverse(i, j) {
    for (let x = 0; x < n; x += 1) {
      for (let z = 0; z < n; z += 1) {
        res[x][z] = Math.max(res[x][z] ?? 0, grid[x + i][z + j]);
      }
    }
  }

  return res;
};
