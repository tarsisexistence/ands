/**
 * Leetcode #1768
 * Difficulty: Easy
 * https://leetcode.com/problems/merge-strings-alternately/
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
export const mergeAlternately = (word1, word2) => {
  const length = Math.max(word1.length, word2.length);
  let ans = '';

  for (let i = 0; i < length; i += 1) {
    if (word1[i]) {
      ans += word1[i];
    }

    if (word2[i]) {
      ans += word2[i];
    }
  }

  return ans;
};
