/**
 * Leetcode #1913
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProductDifference = nums => {
  let a = Number.MIN_SAFE_INTEGER;
  let b = Number.MIN_SAFE_INTEGER;

  let c = Number.MAX_SAFE_INTEGER;
  let d = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (a < num) {
      b = a;
      a = num;
    } else if (b < num) {
      b = num;
    }

    if (d > num) {
      c = d;
      d = num;
    } else if (c > num) {
      c = num;
    }
  }

  return a * b - c * d;
};

// export const maxProductDifference = nums => {
//   nums.sort((a, b) => a - b);
//
//   return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
// };
