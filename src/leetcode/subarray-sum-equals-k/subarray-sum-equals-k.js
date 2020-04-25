/**
 * Leetcode #560
 * Difficulty: Medium
 * https://leetcode.com/problems/subarray-sum-equals-k/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraySum = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let sum = 0;

    for (let j = i; j < nums.length; j += 1) {
      sum += nums[j];

      if (sum === k) {
        count += 1;
      }
    }
  }

  return count;
};

// const subarraySum = (nums, k) => {
//   let count = 0;
//   let sum = 0;
//   let map = {
//     0: 1
//   };
//
//   for (let i = 0; i < nums.length; i += 1) {
//     sum += nums[i];
//
//     if (map[sum - k] > -1) {
//       count += map[sum - k];
//     }
//
//     map[sum] = (map[sum] || 0) + 1;
//   }
//
//   return count;
// };
