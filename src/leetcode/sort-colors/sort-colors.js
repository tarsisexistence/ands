/**
 * Leetcode #75
 * Difficulty: Medium
 * https://leetcode.com/problems/sort-colors/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const sortColors = nums => {
  let index = 0;
  let left = 0;
  let right = nums.length - 1;

  while (index <= right) {
    const num = nums[index];

    if (num === 0) {
      [nums[index], nums[left]] = [nums[left], nums[index]];
      left += 1;
      index += 1;
    } else if (num === 2) {
      [nums[index], nums[right]] = [nums[right], nums[index]];
      right -= 1;
    } else {
      index += 1;
    }
  }
};

// const sortColors = nums => {
//     for (let i = 0; i < nums.length; i += 1) {
//         for (let j = i + 1; j < nums.length; j += 1) {
//             if (nums[i] > nums[j]) {
//                 const temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }
// };
