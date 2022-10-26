/**
 * Leetcode #1828
 * Difficulty: Medium
 * https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle
 */
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
export const countPoints = (points, queries) => {
  const res = new Array(queries.length).fill(0);

  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];

    for (let j = 0; j < queries.length; j += 1) {
      const [x2, y2, radius] = queries[j];
      // Euclidean distance
      // https://en.wikipedia.org/wiki/Euclidean_distance#Two_dimensions
      const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      const isInside = distance <= radius;

      if (isInside) {
        res[j] += 1;
      }
    }
  }

  return res;
};
