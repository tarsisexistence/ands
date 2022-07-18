/**
 * Leetcode #2341
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const numberOfPairs = nums => {
  const paired = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (paired.has(i)) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j += 1) {
      if (!paired.has(j) && nums[i] === nums[j]) {
        paired.add(i);
        paired.add(j);
        break;
      }
    }
  }

  return [paired.size / 2, nums.length - paired.size];
};
