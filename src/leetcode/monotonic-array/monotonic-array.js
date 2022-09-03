/**
 * Leetcode #896
 * Difficulty: Easy
 * https://leetcode.com/problems/monotonic-array/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const isMonotonic = nums => {
  const isInc = nums.at(0) <= nums.at(-1);
  const isDec = nums.at(0) >= nums.at(-1);

  for (let i = 0; i < nums.length - 1; i += 1) {
    if ((isInc && nums[i] > nums[i + 1]) || (isDec && nums[i] < nums[i + 1])) {
      return false;
    }
  }

  return true;
};
