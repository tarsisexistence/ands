/**
 * Leetcode #2351
 * Difficulty: Easy
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 */
/**
 * @param {string} s
 * @return {character}
 */
export const repeatedCharacter = s => {
  const set = new Set();

  for (const c of s) {
    if (set.has(c)) {
      return c;
    } else {
      set.add(c);
    }
  }
};
