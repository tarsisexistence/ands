/**
 * Leetcode #2942
 * Difficulty: Easy
 * https://leetcode.com/problems/find-words-containing-character
 */
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
export const findWordsContaining = function (words, x) {
  const output = [];

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].includes(x)) {
      output.push(i);
    }
  }

  return output;
};
