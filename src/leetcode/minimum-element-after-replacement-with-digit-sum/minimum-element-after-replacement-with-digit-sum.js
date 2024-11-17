/**
 * Leetcode #3300
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minElement = function (nums) {
  let min = Infinity;

  for (const num of nums) {
    const digits = String(num);
    let sum = 0;

    for (const digit of digits) {
      sum += Number(digit);
    }

    min = Math.min(min, sum);
  }

  return min;
};
