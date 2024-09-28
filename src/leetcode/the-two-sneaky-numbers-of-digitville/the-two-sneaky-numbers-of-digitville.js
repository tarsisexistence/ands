/**
 * Leetcode #3289
 * Difficulty: Easy
 * https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const getSneakyNumbers = function (nums) {
  const visited = new Set();
  const output = [];

  for (const num of nums) {
    if (!visited.has(num)) {
      visited.add(num);
      continue;
    }

    output.push(num);

    if (output.length === 2) {
      break;
    }
  }

  return output;
};
