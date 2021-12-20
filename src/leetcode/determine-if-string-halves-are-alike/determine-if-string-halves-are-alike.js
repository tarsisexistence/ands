/**
 * Leetcode #1704
 * Difficulty: Easy
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const halvesAreAlike = s => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let a = 0;
  let b = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!vowels.has(char.toLowerCase())) {
      continue;
    }

    if (i < s.length / 2) {
      a += 1;
    } else {
      b += 1;
    }
  }

  return a === b;
};
