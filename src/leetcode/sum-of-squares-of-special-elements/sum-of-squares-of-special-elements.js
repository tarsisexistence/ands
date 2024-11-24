/**
 * Leetcode #2778
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-squares-of-special-elements
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export const sumOfSquares = nums => {
  let answer = 0;

  for (let i = 1; i <= nums.length; i += 1) {
    if (nums.length % i === 0) {
      answer += nums[i - 1] * nums[i - 1];
    }
  }

  return answer;
};
