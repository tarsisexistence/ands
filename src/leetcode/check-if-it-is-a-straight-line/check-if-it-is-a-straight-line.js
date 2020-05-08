/**
 * Leetcode #1232
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
export const checkStraightLine = coordinates => {
  const x1 = coordinates[0][0];
  const y1 = coordinates[0][1];
  const slope = (coordinates[1][1] - y1) / (coordinates[1][0] - x1);

  for (let i = 2; i < coordinates.length; i += 1) {
    if (coordinates[i][1] - y1 !== slope * (coordinates[i][0] - x1)) {
      return false;
    }
  }

  return true;
};
