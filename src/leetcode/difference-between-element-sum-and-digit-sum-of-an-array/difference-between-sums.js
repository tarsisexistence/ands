/**
 * Leetcode #2535
 * Difficulty: Easy
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const differenceOfSum = function (nums) {
  let sum = 0;
  let digitsSum = 0;

  for (const num of nums) {
    const digits = num.toString();

    sum += num;

    for (const digit of digits) {
      digitsSum += Number(digit);
    }
  }

  return Math.abs(sum - digitsSum);
};
