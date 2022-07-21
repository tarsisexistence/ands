/**
 * Leetcode #1
 * Difficulty: Easy
 * https://leetcode.com/problems/two-sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} startId
 * @return {number[]}
 */
export const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i += 1) {
    const j = map.get(target - nums[i]);

    if (j !== undefined && i !== j) {
      return [i, j];
    }
  }
};

// export const twoSum = (nums, target, startId = 0) => {
//   for (let i = startId + 1; i < nums.length; i += 1) {
//     if (nums[startId] + nums[i] === target) {
//       return [startId, i];
//     }
//   }
//
//   return twoSum(nums, target, startId + 1);
// };

// const twoSum = (nums, target) => {
//   const sums = [];
//
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = 0; j < nums.length; j += 1) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
