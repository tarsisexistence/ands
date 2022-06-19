/**
 * Leetcode #1822
 * Difficulty: Easy
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const arraySign = nums => {
  const product = nums.reduce((acc, n) => acc * n, 1);

  return product < 0 ? -1 : product > 0 ? 1 : 0;
};
