/**
 * Leetcode #1985
 * Difficulty: Medium
 * https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
 */
/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
export const kthLargestNumber = (nums, k) => nums.sort((a, b) => a - b)[nums.length - k];

const sol = (nums, k) => {
  function partition(left, right) {
    if (left === right) {
      return left;
    }

    const middle = Math.floor((left + right) / 2);
  }
};
