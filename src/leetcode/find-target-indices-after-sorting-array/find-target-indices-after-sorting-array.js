/**
 * Leetcode #2089
 * Difficulty: Easy
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const targetIndices = (nums, target) => {
  const result = [];
  let targetCount = 0;
  let lessThanTarget = 0;

  for (const num of nums) {
    if (num === target) {
      targetCount += 1;
    } else if (num < target) {
      lessThanTarget += 1;
    }
  }

  for (let i = 0; i < targetCount; i += 1) {
    result.push(i + lessThanTarget);
  }

  return result;
};

// export const targetIndices = (nums, target) => {
//   nums.sort((a, b) => a - b);
//   const result = [];
//
//   for (let i = 0; i < nums.length; i += 1) {
//     if (nums[i] === target) {
//       result.push(i);
//     }
//   }
//
//   return result;
// };
