/**
 * Leetcode #219
 * Difficulty: Easy
 * https://leetcode.com/problems/contains-duplicate-ii
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const containsNearbyDuplicate = (nums, k) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length && j - i <= k; j += 1) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};
