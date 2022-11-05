/**
 * Leetcode #594
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-harmonious-subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findLHS = nums => {
  const map = new Map();
  let max = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const num of nums) {
    const inc = map.get(num + 1);

    if (inc === undefined) {
      continue;
    }

    const current = map.get(num);
    max = Math.max(max, current + inc);
  }

  return max;
};
