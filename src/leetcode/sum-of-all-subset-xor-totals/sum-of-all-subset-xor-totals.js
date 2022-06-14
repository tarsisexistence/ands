/**
 * Leetcode #1863
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const subsetXORSum = nums => {
  const subsets = [[]];

  for (let i = 0; i < nums.length; i += 1) {
    const { length } = subsets;

    for (let j = 0; j < length; j += 1) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }

  return subsets.reduce((sum, subset) => {
    return sum + subset.reduce((xor, num) => xor ^ num, 0);
  }, 0);
};
