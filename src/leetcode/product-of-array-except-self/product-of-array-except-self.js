/**
 * Leetcode #238
 * Difficulty: Medium
 * https://leetcode.com/problems/product-of-array-except-self/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = nums => {
  const products = [];
  let product = 1;
  let zeroes = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      zeroes += 1;
    } else {
      product *= nums[i];
    }
  }

  if (zeroes > 1) {
    return new Array(nums.length).fill(0);
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      products.push(product);
    } else {
      products.push(zeroes > 0 ? 0 : product / nums[i]);
    }
  }

  return products;
};
