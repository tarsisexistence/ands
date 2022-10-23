/**
 * Leetcode #645
 * Difficulty: Easy
 * https://leetcode.com/problems/set-mismatch
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findErrorNums = nums => {
  let duplicated = null;
  let missed = null;
  let set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      duplicated = num;
    }

    set.add(num);
  }

  for (let i = 0; i <= nums.length; i += 1) {
    if (!set.has(i + 1)) {
      missed = i + 1;
      break;
    }
  }

  return [duplicated, missed];
};
