/**
 * Leetcode #260
 * Difficulty: Medium
 * https://leetcode.com/problems/single-number-iii/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const singleNumber3 = nums => {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    map[num] = map[num] === undefined;
  }

  return Object.keys(map)
    .filter(key => map[key] === true)
    .map(Number);
};
