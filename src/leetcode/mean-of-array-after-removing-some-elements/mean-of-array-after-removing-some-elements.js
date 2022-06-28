/**
 * Leetcode #1619
 * Difficulty: Easy
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements/
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const trimMean = arr => {
  arr.sort((a, b) => a - b);
  const cut = arr.length * 0.05;
  let sum = 0;

  for (let i = cut; i < arr.length - cut; i += 1) {
    sum += arr[i];
  }

  return sum / (arr.length - cut * 2);
};
