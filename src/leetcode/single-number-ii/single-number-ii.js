/**
 * Leetcode #137
 * Difficulty: Medium
 * https://leetcode.com/problems/single-number-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = nums => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    map[num] = map[num] === undefined;
  }

  return Number(Object.keys(map).find(key => map[key] === true));
};
