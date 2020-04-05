/**
 * Leetcode #283
 * Difficulty: Easy
 * https://leetcode.com/problems/move-zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = nums => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[pointer];
      nums[pointer] = temp;
      pointer += 1;
    }
  }
};

// export const moveZeroes = nums => {
//   const nonZeros = [];
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] !== 0) {
//       nonZeros.push(nums[i]);
//     }
//   }
//
//   for (let i = 0; i < nonZeros.length; i += 1) {
//     nums[i] = nonZeros[i];
//   }
//
//   for (let i = 0; i < nums.length - nonZeros.length; i += 1) {
//     nums[nonZeros.length + i] = 0;
//   }
// };

// const moveZeroes = nums => {
//   let pointer = 0;
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] !== 0) {
//       nums[pointer] = nums[i];
//       pointer += 1;
//     }
//   }
//
//
//   for (let i = pointer; i < nums.length; i += 1) {
//     nums[i] = 0;
//   }
// };
