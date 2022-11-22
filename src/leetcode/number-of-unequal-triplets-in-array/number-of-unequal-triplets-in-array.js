/**
 * Leetcode #2475
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-unequal-triplets-in-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const unequalTriplets = nums => {
  let res = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[k] !== nums[i]) {
          res += 1;
        }
      }
    }
  }

  return res;
};
