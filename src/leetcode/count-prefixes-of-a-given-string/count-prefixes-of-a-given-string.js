/**
 * Leetcode #2255
 * Difficulty: Easy
 * https://leetcode.com/problems/count-prefixes-of-a-given-string/
 */
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
export const countPrefixes = (words, s) => words.filter(word => s.indexOf(word) === 0).length;
