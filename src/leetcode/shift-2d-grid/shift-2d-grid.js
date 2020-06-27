/**
 * Leetcode #1260
 * Difficulty: Easy
 * https://leetcode.com/problems/shift-2d-grid/
 */
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
export const shiftGrid = (grid, k) => {
  k %= grid.length * grid[0].length;

  for (let t = 0; t < k; t += 1) {
    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[0].length; j += 1) {
        [grid[0][0], grid[i][j]] = [grid[i][j], grid[0][0]];
      }
    }
  }

  return grid;
};

// export const shiftGrid = (grid, k) => {
//   const height = grid.length;
//   const width = grid[0].length;
//   const flattened = grid.flat();
//   k %= flattened.length;
//   const shifted = [...flattened.slice(-k), ...flattened.slice(0, -k)];
//
//   for (let i = height - 1; i >= 0; i -= 1) {
//     const chunk = [];
//
//     for (let j = width - 1; j >= 0; j -= 1) {
//       chunk[j] = shifted.pop();
//     }
//
//     grid[i] = chunk;
//   }
//
//   return grid;
// };
