/**
 * Leetcode #155
 * Difficulty: Easy
 * https://leetcode.com/problems/min-stack/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSum = grid => {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 1; i < rows; i += 1) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let j = 1; j < cols; j += 1) {
    grid[0][j] += grid[0][j - 1];
  }

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[rows - 1][cols - 1];
};

// const minPathSum = grid => {
//   if (grid.length === 0) {
//     return 0;
//   }
//
//   let min = Infinity;
//   sumShortPath(0, 0, 0);
//   return min;
//
//   function sumShortPath(i, j, sum) {
//     const isInvalidNextI = i + 1 >= grid.length;
//     const isInvalidNextJ = j + 1 >= grid[i].length;
//     const currentSum = sum + grid[i][j];
//
//     if (isInvalidNextI && isInvalidNextJ) {
//       min = Math.min(min, currentSum);
//     } else {
//       if (!isInvalidNextI) {
//         sumShortPath(i + 1, j, currentSum);
//       }
//
//       if (!isInvalidNextJ) {
//         sumShortPath(i, j + 1, currentSum);
//       }
//     }
//   }
// };
