/**
 * Leetcode #1991
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-middle-index-in-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMiddleIndex = nums => {
  let sum = 0;
  let index = -1;

  for (const num of nums) {
    sum += num;
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const diff = sum - nums[i] - leftSum;

    if (diff === leftSum) {
      index = i;
      break;
    }

    leftSum += nums[i];
  }

  return index;
};
