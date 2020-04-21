/**
 * Leetcode #
 * Difficulty: -
 * -
 * Leetcode challenge problem
 */
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {number} x, y
 *     @return {number}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[number, number]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
export const leftMostColumnWithOne = binaryMatrix => {
  const [rows, cols] = binaryMatrix.dimensions();
  let leftMostColumn = -1;
  let n = 0;
  let m = cols - 1;

  while (m >= 0 && n < rows) {
    if (binaryMatrix.get(n, m) === 1) {
      leftMostColumn = m;
      m -= 1;
    } else {
      n += 1;
    }
  }

  return leftMostColumn;
};
