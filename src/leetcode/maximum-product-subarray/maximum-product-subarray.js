/**
 * Leetcode #152
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = nums => {
  let result = nums[0];
  let max = result;
  let min = result;

  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    const maxProduct = max * num;
    const minProduct = min * num;

    max = Math.max(maxProduct, minProduct, num);
    min = Math.min(maxProduct, minProduct, num);
    result = Math.max(result, max);
  }

  return result;
};
