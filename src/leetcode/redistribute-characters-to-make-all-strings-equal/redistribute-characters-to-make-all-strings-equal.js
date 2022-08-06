/**
 * Leetcode #1897
 * Difficulty: Easy
 * https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
 */
/**
 * @param {string[]} words
 * @return {boolean}
 */
export const makeEqual = words => {
  const map = new Map();

  for (const word of words) {
    for (let j = 0; j < word.length; j += 1) {
      map.set(word[j], (map.get(word[j]) ?? 0) + 1);
    }
  }

  for (const value of map.values()) {
    if (value % words.length !== 0) {
      return false;
    }
  }

  return true;
};
