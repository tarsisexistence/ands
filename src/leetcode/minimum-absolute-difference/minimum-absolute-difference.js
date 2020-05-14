/**
 * Leetcode #1200
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-absolute-difference/
 */
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
export const minimumAbsDifference = arr => {
  let res = [];
  let minDiff = Infinity;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i += 1) {
    const min = Math.min(arr[i], arr[i - 1]);
    const max = Math.max(arr[i], arr[i - 1]);
    const diff = Math.abs(max - min);

    if (minDiff > diff) {
      res = [];
      minDiff = diff;
    }

    if (diff === minDiff) {
      res.push([min, max]);
    }
  }

  return res;
};
