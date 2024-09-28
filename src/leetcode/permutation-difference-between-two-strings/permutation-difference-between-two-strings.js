/**
 * Leetcode #3146
 * Difficulty: Easy
 * https://leetcode.com/problems/permutation-difference-between-two-strings
 */
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
export const findPermutationDifference = function (s, t) {
  const map = new Map();
  let output = 0;

  for (let i = 0; i < t.length; i += 1) {
    map.set(t[i], i);
  }

  for (let i = 0; i < s.length; i += 1) {
    output += Math.abs(i - map.get(s[i]));
  }

  return output;
};
