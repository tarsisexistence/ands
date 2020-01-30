/**
 * Leetcode #1299
 * Difficulty: Easy
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const replaceElements = arr => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};
