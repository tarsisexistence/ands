/**
 * Leetcode #1550
 * Difficulty: Easy
 * https://leetcode.com/problems/three-consecutive-odds/
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const threeConsecutiveOdds = arr => {
  let res = [];

  for (let i = 0; i < arr.length && res.length < 3; i += 1) {
    if (arr[i] % 2 === 0) {
      res = [];
    } else {
      res.push(arr[i]);
    }
  }

  return res.length === 3;
};
