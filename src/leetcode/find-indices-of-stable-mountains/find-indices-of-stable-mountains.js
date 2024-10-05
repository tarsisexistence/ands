/**
 * Leetcode #3285
 * Difficulty: Easy
 * https://leetcode.com/problems/find-indices-of-stable-mountains/description/
 */
/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
export const stableMountains = function (height, threshold) {
  const output = [];

  for (let i = 1; i < height.length; i += 1) {
    if (height[i - 1] > threshold) {
      output.push(i);
    }
  }

  return output;
};
