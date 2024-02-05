/**
 * Leetcode #557
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = s =>
  s
    .split(' ')
    .map(str => str.split('').reverse().join(''))
    .join(' ');
