/**
 * Leetcode #1967
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
 */
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
export const numOfStrings = (patterns, word) => {
  let ans = 0;

  for (const pattern of patterns) {
    if (word.includes(pattern)) {
      ans += 1;
    }
  }

  return ans;
};
