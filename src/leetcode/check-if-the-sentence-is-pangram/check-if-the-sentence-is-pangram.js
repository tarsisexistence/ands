/**
 * Leetcode #1832
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */
/**
 * @param {string} sentence
 * @return {boolean}
 */
export const checkIfPangram = sentence => {
  const set = new Set();

  for (let i = 0; i < sentence.length; i += 1) {
    set.add(sentence[i]);
  }

  return set.size === 26;
};
