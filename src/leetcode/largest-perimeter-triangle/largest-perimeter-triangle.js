/**
 * Leetcode #976
 * Difficulty: Easy
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const largestPerimeter = nums => {
  nums.sort((a, b) => b - a);
  let max = 0;

  for (let i = 2; i < nums.length; i += 1) {
    const a = nums[i - 2];
    const b = nums[i - 1];
    const c = nums[i];

    if (a < b + c && b < a + c && c < a + b) {
      max = Math.max(max, a + b + c);
    }
  }

  return max;
};
