/**
 * Leetcode #2395
 * Difficulty: Easy
 * https://leetcode.com/problems/find-subarrays-with-equal-sum/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const findSubarrays = nums => {
  const set = new Set();

  for (let i = 0; i < nums.length - 1; i += 1) {
    const sum = nums[i] + nums[i + 1];

    if (set.has(sum)) {
      return true;
    }

    set.add(sum);
  }

  return false;
};
