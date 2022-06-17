/**
 * Leetcode #1636
 * Difficulty: Easy
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const frequencySort = nums => {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  return nums.sort((a, b) => {
    const x = map.get(a);
    const y = map.get(b);

    return x === y ? b - a : x - y;
  });
};
