/**
 * Leetcode #448
 * Difficulty: Easy
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers = nums => {
  const res = [];
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i += 1) {
    if (!set.has(i + 1)) {
      res.push(i + 1);
    }
  }

  return res;
};
