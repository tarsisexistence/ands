/**
 * Leetcode #1266
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
export const minTimeToVisitAllPoints = points => {
  let time = 0;

  for (let i = 0; i < points.length - 1; i += 1) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    const diffByX = getDifference(x1, x2);
    const diffByY = getDifference(y1, y2);
    const diff = Math.max(diffByX, diffByY);
    time += diff;
  }

  return time;
};

function getDifference(num1, num2) {
  const hasDifferentSigns = (num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0);
  return hasDifferentSigns ? Math.abs(num1) + Math.abs(num2) : Math.abs(num1 - num2);
}
