/**
 * Leetcode #1464
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = (nums) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (num > x) {
      y = x;
      x = num;
    } else if (num > y) {
      y = num;
    }
  }

  return (x - 1) * (y - 1);
};
