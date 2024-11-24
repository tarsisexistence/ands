/**
 * Leetcode #2656
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-sum-with-exactly-k-elements
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const maximizeSum = (nums, k) => {
  let max = Math.max(...nums);
  let answer = 0;

  for (let i = 0; i < k; i += 1) {
    answer += max;
    max += 1;
  }

  return answer;
};
