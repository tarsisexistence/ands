/**
 * Leetcode #1437
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const kLengthApart = (nums, k) => {
  let current = k;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1 && current < k) {
      return false;
    }

    current = nums[i] === 1 ? 0 : current + 1;
  }

  return true;
};

// const kLengthApart = (nums, k) => {
//     let start = -Infinity;
//
//     for (let i = 0; i < nums.length; i += 1) {
//         if (nums[i] !== 1) {
//             continue;
//         }
//
//         const diff = i - start - 1;
//
//         if (diff < k) {
//             return false;
//         }
//
//         start = i;
//     }
//
//     return true;
// };
