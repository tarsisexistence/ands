/**
 * Leetcode #287
 * Difficulty: Medium
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Algorithm: Floyd’s Algorithm: The Tortoise and the Hare
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findDuplicate = nums => {
  let slow = nums[0];
  let fast = nums[0];
  fast = nums[fast];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];
  }

  slow = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
