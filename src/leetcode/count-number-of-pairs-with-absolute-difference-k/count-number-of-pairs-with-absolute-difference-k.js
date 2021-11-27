/**
 * Leetcode #2006
 * Difficulty: Easy
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const countKDifference = (nums, k) => {
  nums.sort((a, b) => a - b);

  let ans = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] - nums[i] === k) {
        ans += 1;
      }
    }
  }

  return ans;
};

// const countKDifference = (nums, k) => {
//   let ans = 0;
//
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (Math.abs(nums[j] - nums[i]) === k) {
//         ans += 1;
//       }
//     }
//   }
//
//   return ans;
// };
