/**
 * Leetcode #1237
 * Difficulty: Easy
 * https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/
 */
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} custom
 * @param {integer} z
 * @return {integer[][]}
 */
export const findSolution = (custom, z) => {
  const result = [];
  const max = 1000;

  for (let x = 1; x <= max; x += 1) {
    for (let y = 1; y <= max; y += 1) {
      if (custom.f(x, y) === z) {
        result.push([x, y]);
        break;
      }
    }
  }

  return result;
};
