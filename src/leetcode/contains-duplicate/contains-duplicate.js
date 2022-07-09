/**
 * Leetcode #217
 * Difficulty: Easy
 * https://leetcode.com/problems/contains-duplicate/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = nums => {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const count of map.values()) {
    if (count > 1) {
      return true;
    }
  }

  return false;
};
