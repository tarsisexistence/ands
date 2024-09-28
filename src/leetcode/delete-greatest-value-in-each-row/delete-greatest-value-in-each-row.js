/**
 * Leetcode #2500
 * Difficulty: Easy
 * https://leetcode.com/problems/delete-greatest-value-in-each-row
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const deleteGreatestValue = grid => {
  let res = 0;

  while (grid[0].length !== 0) {
    let max = 0;

    for (let i = 0; i < grid.length; i += 1) {
      const innerMax = Math.max(...grid[i]);
      const index = grid[i].indexOf(innerMax);
      grid[i].splice(index, 1);
      max = Math.max(max, innerMax);
    }

    res += max;
  }

  return res;
};
