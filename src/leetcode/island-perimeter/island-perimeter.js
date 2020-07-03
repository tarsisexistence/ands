/**
 * Leetcode #463
 * Difficulty: Easy
 * https://leetcode.com/problems/island-perimeter/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const islandPerimeter = grid => {
  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 0) {
        continue;
      }

      perimeter += 4;

      if (row > 0 && grid[row - 1][col]) perimeter -= 1;
      if (row < rows - 1 && grid[row + 1][col]) perimeter -= 1;
      if (grid[row][col - 1]) perimeter -= 1;
      if (grid[row][col + 1]) perimeter -= 1;
    }
  }

  return perimeter;
};

// export const islandPerimeter = grid => {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   let perimeter = 0;
//
//   for (let row = 0; row <= rows; row += rows) {
//     for (let col = 0; col <= cols; col += 1) {
//       if (row < rows) {
//         if (grid[row][col] === 1 && grid[row][col - 1] !== 1) {
//           perimeter += 1;
//         } else if (grid[row][col - 1] === 1 && grid[row][col] !== 1) {
//           perimeter += 1;
//         }
//
//         if (grid[row][col] === 1) {
//           perimeter += 1;
//         }
//       } else {
//         if (grid[row - 1][col] === 1) {
//           perimeter += 1;
//         }
//       }
//     }
//   }
//
//   for (let row = 1; row < rows; row += 1) {
//     for (let col = 0; col <= cols; col += 1) {
//       if (grid[row][col] === 1 && grid[row][col - 1] !== 1) {
//         perimeter += 1;
//       } else if (grid[row][col - 1] === 1 && grid[row][col] !== 1) {
//         perimeter += 1;
//       }
//
//       if (grid[row][col] === 1 && grid[row - 1][col] !== 1) {
//         perimeter += 1;
//       } else if (grid[row - 1][col] === 1 && grid[row][col] !== 1) {
//         perimeter += 1;
//       }
//     }
//   }
//
//   return perimeter;
// };
