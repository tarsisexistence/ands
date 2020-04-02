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
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }

  return Array.from(map.keys());
};
