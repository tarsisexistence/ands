/**
 * Leetcode #1779
 * Difficulty: Easy
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
export const nearestValidPoint = (x, y, points) => {
  let minDistance = Infinity;
  let minIndex = -1;

  for (let i = 0; i < points.length; i += 1) {
    const [pointX, pointY] = points[i];
    const isValid = x === pointX || y === pointY;
    const distance = x === pointX ? Math.abs(y - pointY) : Math.abs(x - pointX);

    if (isValid && distance < minDistance) {
      minDistance = distance;
      minIndex = i;
    }
  }

  return minIndex;
};
