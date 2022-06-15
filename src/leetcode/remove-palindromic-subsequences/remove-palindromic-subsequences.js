/**
 * Leetcode #1332
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const removePalindromeSub = s => (s === s.split('').reverse().join('') ? 1 : 2);
