/**
 * Leetcode #2154
 * Difficulty: Easy
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two/
 */
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
export const findFinalValue = (nums, original) => {
  const set = new Set();

  for (const num of nums) {
    set.add(num);
  }

  while (set.has(original)) {
    original *= 2;
  }

  return original;
};
