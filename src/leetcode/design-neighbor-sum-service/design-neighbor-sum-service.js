/**
 * Leetcode #3093
 * Difficulty: Easy
 * https://leetcode.com/problems/design-neighbor-sum-service
 */

/**
 * @param {number[][]} grid
 */
export class NeighborSum {
  constructor(grid) {
    this.diagonal = {};
    this.adjacent = {};

    const getValue = (i, j) => {
      if (grid[i] === undefined) {
        return 0;
      }

      return grid[i][j] ?? 0;
    };

    for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[i].length; j += 1) {
        const value = grid[i][j];

        this.diagonal[value] =
          getValue(i - 1, j - 1) + getValue(i - 1, j + 1) + getValue(i + 1, j - 1) + getValue(i + 1, j + 1);
        this.adjacent[value] = getValue(i - 1, j) + getValue(i + 1, j) + getValue(i, j - 1) + getValue(i, j + 1);
      }
    }
  }

  /**
   * @param {number} value
   * @return {number}
   */
  adjacentSum(value) {
    return this.adjacent[value];
  }

  /**
   * @param {number} value
   * @return {number}
   */
  diagonalSum(value) {
    return this.diagonal[value];
  }
}
