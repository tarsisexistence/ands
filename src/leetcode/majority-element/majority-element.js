/**
 * Leetcode #169
 * Difficulty: Easy
 * https://leetcode.com/problems/majority-element/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = nums => {
  const minMajority = nums.length / 2;
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const times = (map.get(nums[i]) || 0) + 1;

    if (times > minMajority) {
      return nums[i];
    }

    map.set(nums[i], times);
  }

  return 0;
};
