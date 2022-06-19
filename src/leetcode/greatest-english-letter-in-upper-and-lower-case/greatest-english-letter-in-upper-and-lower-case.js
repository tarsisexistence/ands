/**
 * Leetcode #2309
 * Difficulty: Easy
 * https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const greatestLetter = s => {
  const set = new Set();
  let max = '';

  for (const c of s) {
    set.add(c);
  }

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    const upperC = c.toUpperCase();
    if (set.has(c.toLowerCase()) && set.has(upperC) && upperC > max) {
      max = upperC;
    }
  }

  return max;
};
