/**
 * Leetcode #2798
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-employees-who-met-the-target
 */
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
export const numberOfEmployeesWhoMetTarget = function (hours, target) {
  return hours.filter(hour => hour >= target).length;
};
