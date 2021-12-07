/**
 * Leetcode #1662
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 */
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
export const arrayStringsAreEqual = (word1, word2) => word1.join('') === word2.join('');
