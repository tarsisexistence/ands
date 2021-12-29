/**
 * Leetcode #1941
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const areOccurrencesEqual = s => {
  const map = new Map();

  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  let prev = null;

  for (const value of map.values()) {
    if (prev !== null && prev !== value) {
      return false;
    }

    prev = value;
  }

  return true;
};
