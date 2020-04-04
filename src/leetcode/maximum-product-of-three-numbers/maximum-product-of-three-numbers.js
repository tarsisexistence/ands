/**
 * Leetcode #628
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maximumProduct = nums => {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min2 = Infinity;
  let min1 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2, max3] = [nums[i], max1, max2];
    } else if (nums[i] > max2) {
      [max2, max3] = [nums[i], max2];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }

    if (nums[i] < min1) {
      [min2, min1] = [min1, nums[i]];
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const maximumProduct = nums => {
//   nums.sort((a, b) => a - b);
//   return Math.max(
//     nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
//     nums[nums.length - 1] * nums[0] * nums[1]
//   )
// };
