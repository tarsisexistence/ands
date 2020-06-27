/**
 * Leetcode #1385
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
export const findTheDistanceValue = (arr1, arr2, d) =>
  arr1.filter(num1 => arr2.every(num2 => Math.abs(num1 - num2) > d)).length;
