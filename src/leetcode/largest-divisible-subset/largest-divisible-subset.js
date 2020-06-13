/**
 * Leetcode #368
 * Difficulty: Medium
 * https://leetcode.com/problems/largest-divisible-subset/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const largestDivisibleSubset = nums => {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const subsets = Array.from({ length: nums.length }, (_, i) => [nums[i]]);

  for (let i = subsets.length - 1; i >= 0; i -= 1) {
    for (let j = i + 1; j < subsets.length; j += 1) {
      const isDivisible = subsets[j][subsets[j].length - 1] % nums[i] === 0;
      const canExtend = subsets[i].length - 1 < subsets[j].length;

      if (isDivisible && canExtend) {
        subsets[i] = subsets[j].concat(subsets[i][subsets[i].length - 1]);
      }
    }
  }

  return subsets.reduce(
    (largest, subset) => (largest.length >= subset.length ? largest : subset),
    []
  );
};
