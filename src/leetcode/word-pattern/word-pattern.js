/**
 * Leetcode #290
 * Difficulty: Easy
 * https://leetcode.com/problems/word-pattern
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export const wordPattern = (pattern, s) => {
  const words = s.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }

  const map = new Map();
  const used = new Set();

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const prev = map.get(pattern[i]);

    if (prev === undefined && !used.has(word)) {
      map.set(pattern[i], word);
      used.add(word);
    } else if (prev !== word) {
      return false;
    }
  }

  return true;
};
