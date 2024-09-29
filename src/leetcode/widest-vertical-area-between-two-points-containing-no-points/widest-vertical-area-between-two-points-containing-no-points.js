/**
 * Leetcode #1637
 * Difficulty: Easy
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
export const maxWidthOfVerticalArea = function (points) {
  let max = 0;

  points.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < points.length - 1; i += 1) {
    max = Math.max(max, points[i + 1][0] - points[i][0]);
  }

  return max;
};
