/**
 * Leetcode #2357
 * Difficulty: Easy
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const minimumOperations = nums => {
  let operations = 0;

  while (true) {
    let min = 100;
    let max = 0;

    for (const num of nums) {
      if (num !== 0) {
        min = Math.min(min, num);
      }

      max = Math.max(max, num);
    }

    if (max === 0) {
      break;
    }

    for (let i = 0; i < nums.length; i += 1) {
      nums[i] = Math.max(0, nums[i] - min);
    }

    operations += 1;
  }

  return operations;
};

// export const minimumOperations = nums => {
//   const set = new Set(nums);
//
//   return set.has(0) ? set.size - 1 : set.size;
// };
