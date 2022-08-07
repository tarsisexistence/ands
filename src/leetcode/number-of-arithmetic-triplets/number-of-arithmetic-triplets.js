/**
 * Leetcode #2367
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-arithmetic-triplets/
 */
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
export const arithmeticTriplets = (nums, diff) => {
  let res = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const triplet = [nums[i]];

    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] - triplet.at(-1) === diff) {
        triplet.push(nums[j]);
      }
    }

    if (triplet.length >= 3) {
      res += 1;
    }
  }

  return res;
};
