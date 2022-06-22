/**
 * Leetcode #215
 * Difficulty: Medium
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findKthLargest = (nums, k) => nums.sort((a, b) => a - b)[nums.length - k];
