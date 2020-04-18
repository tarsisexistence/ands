/**
 * Leetcode #200
 * Difficulty: Medium
 * https://leetcode.com/problems/number-of-islands/
 * Algorithm: DFS
 */
/**
 * @param {string[][]} grid
 * @return {number}
 */
export const numIslands = grid => {
  let islands = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        islands += 1;
        search(i, j);
      }
    }
  }

  return islands;

  function search(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] === '0'
    ) {
      return;
    }

    grid[i][j] = '0';
    search(i - 1, j);
    search(i + 1, j);
    search(i, j - 1);
    search(i, j + 1);
  }
};
