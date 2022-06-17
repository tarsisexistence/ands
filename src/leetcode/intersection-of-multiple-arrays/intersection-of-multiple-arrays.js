/**
 * Leetcode #2248
 * Difficulty: Easy
 * https://leetcode.com/problems/intersection-of-multiple-arrays/
 */
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
export const intersection = nums => {
  let set = new Set(nums[0]);

  const filterSet = num => set.has(num);

  for (let i = 1; i < nums.length; i += 1) {
    set = new Set(nums[i].filter(filterSet));
  }

  return Array.from(set).sort((a, b) => a - b);
};
