/**
 * Leetcode #1004
 * Difficulty: Medium
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const longestOnes = (nums, k) => {
  let left = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0 && k === 0) {
      left += 1;
      continue;
    }

    if (nums[i] === 0) {
      k -= 1;
    }

    const current = i + 1 - left;
    max = Math.max(max, current);

    while (k === 0 && nums[i + 1] === 0) {
      if (nums[left] === 0) {
        k += 1;
      }

      left += 1;
    }
  }

  return max;
};

// const longestOnes = (nums, k) => {
//   let left = 0;
//   let max = 0;
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === 0) {
//       k -= 1;
//     }
//
//     if (k < 0) {
//       while (k < 0) {
//         if (nums[left] === 0) {
//           k += 1;
//         }
//         left += 1;
//       }
//     } else {
//       const current = i + 1 - left;
//       max = Math.max(max, current);
//     }
//   }
//
//   return max;
// };
