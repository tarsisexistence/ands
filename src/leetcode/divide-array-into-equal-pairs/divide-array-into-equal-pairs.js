/**
 * Leetcode #2206
 * Difficulty: Easy
 * https://leetcode.com/problems/divide-array-into-equal-pairs/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const divideArray = nums => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return set.size === 0;
};
