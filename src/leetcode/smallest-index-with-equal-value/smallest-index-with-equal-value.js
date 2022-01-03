/**
 * Leetcode #2057
 * Difficulty: Easy
 * https://leetcode.com/problems/smallest-index-with-equal-value/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const smallestEqual = nums => nums.findIndex((num, i) => i % 10 === num);

// export const smallestEqual = nums => {
//   for (let i = 0; i < nums.length; i += 1) {
//     if (i % 10 === nums[i]) {
//       return i;
//     }
//   }
//
//   return -1;
// };
