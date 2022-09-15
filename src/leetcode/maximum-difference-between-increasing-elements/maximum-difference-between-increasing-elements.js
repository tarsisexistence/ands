/**
 * Leetcode #2016
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const maximumDifference = nums => {
  let min = nums[0];
  let max = -1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > min) {
      max = Math.max(max, nums[i] - min);
    }

    min = Math.min(min, nums[i]);
  }

  return max;
};

// const maximumDifference = nums => {
//     let max = -1;

//     for (let i = 0; i < nums.length; i += 1) {
//         for (let j = i + 1; j < nums.length; j += 1) {
//             if (nums[j] > nums[i]) {
//                 max = Math.max(max, nums[j] - nums[i]);
//             }
//         }
//     }

//     return max;
// };
