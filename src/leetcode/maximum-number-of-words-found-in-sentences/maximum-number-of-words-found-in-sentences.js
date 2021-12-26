/**
 * Leetcode #2114
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */
/**
 * @param {string[]} sentences
 * @return {number}
 */
export const mostWordsFound = sentences => {
  let ans = 0;

  for (const sentence of sentences) {
    const length = sentence.split(' ').length;

    if (length > ans) {
      ans = length;
    }
  }

  return ans;
};
