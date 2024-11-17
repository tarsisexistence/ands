/**
 * Leetcode #2828
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words
 */
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
export const isAcronym = function (words, s) {
  return s === words.reduce((acc, word) => acc + word[0], '');
};
