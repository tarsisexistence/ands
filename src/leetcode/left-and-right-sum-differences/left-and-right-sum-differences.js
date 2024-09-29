/**
 * Leetcode #2574
 * Difficulty: Easy
 * https://leetcode.com/problems/left-and-right-sum-differences
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const leftRightDifference = function (nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i += 1) {
    let left = 0;
    let right = 0;

    for (let j = i - 1; j >= 0; j -= 1) {
      left += nums[j];
    }

    for (let j = i + 1; j < nums.length; j += 1) {
      right += nums[j];
    }

    answer.push(Math.abs(left - right));
  }

  return answer;
};
